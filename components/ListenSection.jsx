import React from 'react';
import Image from 'next/image';
import applePod from '../public/images/apple-podcasts.png';
import spotifyPod from '../public/images/Spotify_logo_v2.png';
import googlePod from '../public/images/Google-Podcasts-logo.png';
import classes from '../styles/listenSection.module.css';

export default function ListenSection() {
  return (
    <>
      <div className="container mt-5">
        <div>
          <h1 className={classes.header}>Listen On</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Image
              src={applePod}
              alt="apple podcast"
              layout="intrinsic"
              width={300}
              height={158}
            />
          </div>
          <div className="col-sm-12 col-md-3">
            <Image
              src={spotifyPod}
              alt="Spotify podcast"
              layout="intrinsic"
              width={350}
              height={205}
              style={{ marginLeft: '-40px' }}
            />
          </div>
          <div className="col-sm-12 col-md-3">
            <div style={{ marginLeft: '35px' }}>
              <Image
                src={googlePod}
                alt="Google podcast"
                layout="intrinsic"
                width={300}
                height={168}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
