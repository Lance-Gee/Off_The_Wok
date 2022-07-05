import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import classes from '../styles/allEpisode.module.css';

export default function AllEpisodes() {
  const [episodes, setEpisodes] = useState();
  const [nextTracks, setNextTracks] = useState([]);
  const [topEpi, setTopEpi] = useState([]);

  const id = '3jCv047GA6wRkDx7pa3aXR';
  const market = 'CA';

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
      // setToken(tokenResponse.data.access_token);
      console.log('Spotify Token granted');

      try {
        axios(`https://api.spotify.com/v1/shows/${id}?market=${market}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenResponse.data.access_token,
          },
        })
          .then((tracksResponse) => {
            // console.log(tracksResponse.data.episodes);
            setEpisodes(tracksResponse.data.items);
            setNextTracks(tracksResponse.data.episodes.items);
          })
          .then(() => {
            try {
              axios(
                'https://api.spotify.com/v1/shows/3jCv047GA6wRkDx7pa3aXR/episodes?offset=50&limit=50&market=CA',
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + tokenResponse.data.access_token,
                  },
                }
              ).then((nextResponse) => {
                // console.log(nextResponse);
                nextResponse.data.items.map((item) => {
                  setNextTracks((state) => [...state, item]);
                });
              });
            } catch (error) {}
          });
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  useEffect(() => {
    nextTracks.map((track) => {
      if (
        track.name.includes('01.') ||
        track.name.includes('02.') ||
        track.name.includes('17.') ||
        track.name.includes('10.') ||
        track.name.includes('14.')
      ) {
        if (!topEpi.some((i) => i.name.includes(track.name))) {
          setTopEpi((epi) => [...epi, track]);
        }
      }
    });
    console.log(nextTracks);
  }, [nextTracks]);

  function truncate(str) {
    if (str.length > 200) {
      return str.slice(0, 200) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className="container mt-5">
      <h1 className={classes.heading}>off the wok episodes</h1>
      <div className="row">
        {nextTracks.map((track) => (
          <div key={track.id} className="col pb-3 mt-3">
            <div className="card mt-3" style={{ width: '18rem' }}>
              <div className={classes.outerDiv}>
                <div className={classes.cardImage}>
                  <Image
                    src={track.images[1].url}
                    width={150}
                    height={150}
                    alt="Instagram-post"
                    style={{ borderRadius: '15px' }}
                  />
                </div>
              </div>
              <ReactAudioPlayer
                src={track.audio_preview_url}
                controls
                className={classes.audioPlayer}
              />
              <div className="card-body">
                <h5 className="card-title">{track.name}</h5>
                <p className="card-text">{truncate(track.description)}</p>
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Full Episode
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
