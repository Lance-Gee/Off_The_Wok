import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from '../styles/episodeSection.module.css';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import Link from 'next/link';

export default function EpisodeSection() {
  const id = '3jCv047GA6wRkDx7pa3aXR';
  const market = 'CA';

  const [nextTracks, setNextTracks] = useState([]);
  const [token, setToken] = useState();
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          btoa(
            process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET
          ),
      },
      data: 'grant_type=client_credentials',
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      // console.log(tokenResponse.data.access_token);

      try {
        axios(`https://api.spotify.com/v1/shows/${id}?market=${market}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenResponse.data.access_token,
          },
        }).then((tracksResponse) => {
          // console.log(tracksResponse.data.episodes);
          setEpisodes(tracksResponse.data.items);
          setNextTracks(tracksResponse.data.episodes.items);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  useEffect(() => {
    console.log(nextTracks);
  }, [nextTracks]);

  return (
    <div className="container pb-3">
      <h1 className="pb-5">Latest Episodes</h1>
      {nextTracks.slice(0, 4).map((track) => (
        <div
          key={track.id}
          className="card"
          style={{
            width: '90%',
            height: '185px',
            backgroundColor: '#D9D9D9',
            borderRadius: '25px',
            marginTop: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="row">
            <div
              className="col-3"
              style={{ padding: '15px', marginLeft: '15px' }}
            >
              <div className={classes.outerDiv}>
                <div className={classes.wrapperDiv}>
                  <Image
                    src={track.images[1].url}
                    alt="instagram-image"
                    layout="fixed"
                    width={125}
                    height={125}
                    style={{ borderRadius: '15px' }}
                  />
                </div>
              </div>
            </div>
            <div className="col" style={{ marginLeft: '-20px' }}>
              <p style={{ marginTop: '15px' }}>
                OFF THE WOK - EPISODE {track.name.substring(0, 2)}
              </p>
              <h3 style={{ marginTop: '-15px' }}>
                {track.name.substring(track.name.indexOf('.') + 1)}
              </h3>
              <div className="row align-items-center">
                <div className="col-9 align-self-center">
                  <ReactAudioPlayer
                    src={track.audio_preview_url}
                    controls
                    className={classes.audioPlayer}
                  />
                </div>
                <div className="col-2" style={{ marginTop: '15px' }}>
                  <a
                    href={track.external_urls.spotify}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Full Episode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={classes.divider}>
        <span></span>
        <span>
          <Link href="/episode">All Episodes</Link>
        </span>
        <span></span>
      </div>
    </div>
  );
}
