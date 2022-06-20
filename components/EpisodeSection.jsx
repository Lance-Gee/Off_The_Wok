import React from 'react';
import instaImage from '../public/images/instagram_post.png';
import Image from 'next/image';
import classes from '../styles/episodeSection.module.css';
import ReactAudioPlayer from 'react-audio-player';

export default function EpisodeSection() {
  return (
    <div className="container">
      <div
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
                  src={instaImage}
                  alt="instagram-image"
                  layout="fixed"
                  width={125}
                  height={125}
                />
              </div>
            </div>
          </div>
          <div className="col" style={{ marginLeft: '-20px' }}>
            <p style={{ marginTop: '15px' }}>OFF THE WOK - EPISODE 1</p>
            <h2 style={{ marginTop: '-15px' }}>Cancel Culture</h2>
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              controls
              className={classes.audioPlayer}
            />
          </div>
        </div>
      </div>

      <div
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
                  src={instaImage}
                  alt="instagram-image"
                  layout="fixed"
                  width={125}
                  height={125}
                />
              </div>
            </div>
          </div>
          <div className="col" style={{ marginLeft: '-20px' }}>
            <p style={{ marginTop: '15px' }}>OFF THE WOK - EPISODE 1</p>
            <h2 style={{ marginTop: '-15px' }}>Cancel Culture</h2>
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              controls
              className={classes.audioPlayer}
            />
          </div>
        </div>
      </div>

      <div
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
                  src={instaImage}
                  alt="instagram-image"
                  layout="fixed"
                  width={125}
                  height={125}
                />
              </div>
            </div>
          </div>
          <div className="col" style={{ marginLeft: '-20px' }}>
            <p style={{ marginTop: '15px' }}>OFF THE WOK - EPISODE 1</p>
            <h2 style={{ marginTop: '-15px' }}>Cancel Culture</h2>
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              controls
              className={classes.audioPlayer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
