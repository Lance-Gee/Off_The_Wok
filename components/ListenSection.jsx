import React from 'react';
import Image from 'next/image';
import applePod from '../public/images/apple-podcasts.png';
import spotifyPod from '../public/images/Spotify_logo.png';
import googlePod from '../public/images/Google-Podcasts-logo.png';

export default function ListenSection() {
  return (
    <>
      <div
        className="container"
        style={{ width: '1000px', marginTop: '100px' }}
      >
        <div>
          <h1>Listen On</h1>
        </div>
        <div className="row">
          <div className="col">
            <Image
              src={applePod}
              alt="apple podcast"
              layout="responsive"
              width={370}
              height={195}
            />
          </div>
          <div className="col">
            <Image
              src={spotifyPod}
              alt="Spotify podcast"
              layout="responsive"
              width={202}
              height={135}
            />
          </div>
          <div className="col">
            <Image
              src={googlePod}
              alt="Google podcast"
              layout="responsive"
              width={371}
              height={208}
            />
          </div>
        </div>
      </div>
    </>
  );
}
