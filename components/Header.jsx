import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import headerImage from '../public/images/header_image_v1.png';
import classes from '../styles/header.module.css';
import useWindowSize from './../customHook/useWindowSize';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize === undefined) {
      setWindowWidth(window.innerWidth);
    } else {
      setWindowWidth(windowSize);
    }
  });

  return (
    <div>
      <div className={classes.gradient}>
        <div className="container">
          {windowWidth > 767 ? (
            <div className={classes.outerDiv}>
              <div className={classes.headerTitle}>
                <h1>This Is</h1>
                <h1>Off The Wok</h1>
                <div className={classes.headerSub}>
                  <h2>
                    A Podcast that explores the comedy and struggles of growing
                    up Asian in Western Society.
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div className={classes.mobileHeader}>
              <h1>This Is</h1>
            </div>
          )}
          <Image
            src={headerImage}
            alt="headPhones"
            layout="responsive"
            width={740}
            height={550}
            priority
          />
          {windowWidth > 767 ? null : (
            <h2 className={classes.mobileSub}>
              A Podcast that explores the comedy and struggles of growing up
              Asian in Western Society.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
