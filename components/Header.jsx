import React from 'react';
import Image from 'next/image';
import headerImage from '../public/images/header_image_v1.png';
import classes from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={classes.gradient}>
      <div className={classes.container} style={{ width: '1000px' }}>
        <div className={classes.headerTitle}>
          <h1>This Is</h1>
          <h1>Off The Wok</h1>
        </div>
        <div className={classes.headerSub}>
          <h2>
            A Podcast that explores the comedy and struggles of growing up Asian
            in Western Society.
          </h2>
        </div>
        <Image
          src={headerImage}
          alt="headPhones"
          layout="responsive"
          width={740}
          height={550}
        />
      </div>
    </div>
  );
}
