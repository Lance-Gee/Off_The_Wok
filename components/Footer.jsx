import Image from 'next/image';
import React from 'react';
import instagram from '../public/images/instagram.png';
import facebook from '../public/images/facebook.png';
import tiktok from '../public/images/tik-tok.png';
import youtube from '../public/images/youtube.png';

export default function Footer() {
  return (
    <div className="container pb-5">
      <h2 className="text-center pb-5">Follow Us</h2>
      <div className="row justify-content-center">
        <div className="col text-center">
          <Image
            src={instagram}
            alt="instagram-logo"
            layout="fixed"
            width={40}
            height={40}
          />
        </div>
        <div className="col text-center">
          <Image
            src={facebook}
            alt="facebook-logo"
            layout="fixed"
            width={40}
            height={40}
          />
        </div>
        <div className="col text-center">
          <Image
            src={tiktok}
            alt="tiktok-logo"
            layout="fixed"
            width={40}
            height={40}
          />
        </div>
        <div className="col text-center">
          <Image
            src={youtube}
            alt="youtube-logo"
            layout="fixed"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
