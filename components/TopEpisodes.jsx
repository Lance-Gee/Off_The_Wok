import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import wave from '../public/images/wave.png';
import OTWSpotify from '../public/images/OTW_Spotify.png';
import classes from '../styles/topEpisode.module.css';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';

export default function TopEpisodes() {
  // const [token, setToken] = useState(props.token);
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
  }, [nextTracks]);

  return (
    <div>
      <Image
        src={wave}
        alt="wave"
        layout="responsive"
        width={1656}
        height={1733}
      />
      <div
        style={{
          marginTop: '150px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '1000px',
        }}
      >
        <div className={classes.image1}>
          <div className="row">
            <div className="col-4">
              <Image
                src={OTWSpotify}
                alt="OTWSpotify"
                layout="responsive"
                width={659}
                height={963}
              />
            </div>
            <div className="col-8">
              <h2>Top 5 Listened to Episodes</h2>
              <ul className={classes.episodes}>
                {topEpi.map((epi) => (
                  <li key={epi.id}>
                    <h5 className="ms-3">{epi.name}</h5>
                    <div className="row">
                      <div className="col-2">
                        <div className="ms-3">
                          <Image
                            src={epi.images[1].url}
                            alt="instagram-image"
                            layout="fixed"
                            width={75}
                            height={75}
                            style={{ borderRadius: '15px' }}
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <ReactAudioPlayer
                          src=""
                          controls
                          className={classes.audioPlayer}
                        />
                      </div>
                      <div className="col-1">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={epi.external_urls.spotify}
                        >
                          <p>Full episode</p>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
