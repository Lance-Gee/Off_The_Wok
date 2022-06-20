import React from 'react';
import Image from 'next/image';
import wave from '../public/images/wave.png';
import OTWSpotify from '../public/images/OTW_Spotify.png';
import classes from '../styles/topEpisode.module.css';

export default function TopEpisodes() {
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
