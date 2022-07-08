import Image from 'next/image';
import React from 'react';
import LancePic from '../public/images/lance.png';
import EricPic from '../public/images/eric.png';
import KenPic from '../public/images/ken.png';
import Footer from './Footer';
import classes from '../styles/aboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={`container ${classes.ContainerDiv}`}>
      <h1 className="mt-5 pb-3">Hello Stranger</h1>
      <p className="pb-5">
        OFF THE WOK is a group of peeps that just like to shoot the shit. We
        usually chat about the comedy and struggles of growing up Asian in North
        America, but it also depends on what the flavour of the day is. We try
        to discover what we and our guests have in common, but more importantly,
        what makes us unique as Asians and as individuals. If we can also raise
        more awareness about Asian culture along the way that would be a freakin
        win for us. Usually, you'll either find us hanging in the sunny and
        mostly chilly city of Calgary, Canada, or across the interweb. Wherever
        you see us, please say hello. We love strange encounters of every kind.
        Heck, or why not just come onto the show, eh?
      </p>
      <div className="row pb-5">
        <div className="col-12">
          <Image
            src={LancePic}
            alt="Lance-Gee"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
        <div className="col-12">
          <h6>
            <strong>Lance Gee</strong>
          </h6>
          <h6 className={classes.empTitle}>Co-Host</h6>
          <p>
            This is Lance. We're not really sure how old this picture is. We're
            guessing it's present-day Lance, but it could just as easily be
            college Lance. He's a family man and has a shit ton of kids which
            speaks to how old he "really" is.
            <br />
            <strong>When he's not on OTW:</strong> He's tossing swings and
            taking lunch money at the park. Gambling with his wife and flipping
            mahjong tables.
          </p>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <h6>
            <strong>Eric Wu</strong>
          </h6>
          <h6 className={classes.empTitle}>Co-Host</h6>
          <p>
            This is Eric. He loves video games, but he's not a gamer. He also
            plays the piano, but he's not really a musician either. He knows
            nothing about wizardry, but he's the closest you can get to a wizard
            with that fake owl on his shoulder.
            <br />
            <strong>When he's not on OTW:</strong> He's eating, Ramen, Pho, Chow
            Mein, Shanghai Noodles, Ho Fun, you name it. Call him Mr. Noodle.
          </p>
        </div>
        <div className="col-12">
          <Image
            src={EricPic}
            alt="Eric-Wu"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <Image
            src={KenPic}
            alt="Ken Truong"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
        <div className="col-12">
          <h6>
            <strong>Ken Truong</strong>
          </h6>
          <h6 className={classes.empTitle}>Editor & Designer</h6>
          <p>
            This is Ken. He likes to put pictures and words together on the
            interweb and make them look semi-presentable to people like you.
            He's also responsible for any audio mistakes on the podcasts. Blame
            him.
            <br />
            <strong>When he's not on OTW:</strong> He's throwing discs at
            people's faces
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
