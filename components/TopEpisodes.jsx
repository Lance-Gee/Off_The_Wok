import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import wave from '../public/images/wave.png';
import OTWSpotify from '../public/images/OTW_Spotify.png';
import classes from '../styles/topEpisode.module.css';
import axios from 'axios';

export default function TopEpisodes() {
  const [token, setToken] = useState();
  const [episodes, setEpisodes] = useState();
  const [nextTracks, setNextTracks] = useState([]);
  const [topEpi, setTopEpi] = useState([]);

  const id = '3jCv047GA6wRkDx7pa3aXR';
  const market = 'CA';

  // Taylor Swift ID: 06HL4z0CvFAxyc27GXpf02
  //open.spotify.com/show/3jCv047GA6wRkDx7pa3aXR?si=511ee09d1eb14021

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

  useEffect(() => {
    console.log(topEpi);
  }, [topEpi]);

  useEffect(() => {
    console.log(nextTracks);
  }, [nextTracks]);

  return (
    <div>
      <Image
        src={wave}
        alt="wave"
        layout="responsive"
        width={1656}
        height={1233}
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
            <div className="col">
              <Image
                src={OTWSpotify}
                alt="OTWSpotify"
                layout="responsive"
                width={659}
                height={963}
              />
            </div>
            <div className="col">
              <h2>Top 5 Listened to Episodes</h2>
              <ol className={classes.episodes}>
                <li>
                  <h3>Episode 1</h3>
                </li>
                <li>
                  <h3>Episode 2</h3>
                </li>
                <li>
                  <h3>Episode 3</h3>
                </li>
                <li>
                  <h3>Episode 4</h3>
                </li>
                <li>
                  <h3>Episode 5</h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
