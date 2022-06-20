import Image from 'next/image';
import React from 'react';
import LancePic from '../public/images/lance.png';
import EricPic from '../public/images/eric.png';
import KenPic from '../public/images/ken.png';
import Footer from './Footer';
import classes from '../styles/aboutUs.module.css';

export default function AboutUs() {
  return (
    <div className="container" style={{ width: '50%' }}>
      <h1 className="mt-5 pb-5">Hello Stranger</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam
        dolorem velit earum! Deserunt eaque perspiciatis voluptates soluta sunt
        hic neque, fugiat magni saepe. Adipisci voluptate incidunt reiciendis?
        Laudantium, esse! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Odio aliquid dolorum praesentium deserunt laboriosam nulla dolor.
        Quibusdam vel eaque debitis pariatur magnam officia ipsum mollitia, et
        facilis. Eaque, natus minus. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ullam iste neque dolore eligendi vel error accusamus
        sunt alias nesciunt? Sit ducimus a quos dolores quia nulla minus
        quibusdam excepturi aut.
      </p>
      <div className="row pb-5">
        <div className="col">
          <Image
            src={LancePic}
            alt="Lance-Gee"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
        <div className="col">
          <h6>Lance Gee</h6>
          <h6 className={classes.empTitle}>Co-Host</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            est voluptatem tempore aut ex? Deleniti, repellat fugit minima amet
            sed corrupti, nihil eveniet hic aut a magni iusto expedita cum.
          </p>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col">
          <h6>Eric Wu</h6>
          <h6 className={classes.empTitle}>Co-Host</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            est voluptatem tempore aut ex? Deleniti, repellat fugit minima amet
            sed corrupti, nihil eveniet hic aut a magni iusto expedita cum.
          </p>
        </div>
        <div className="col">
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
        <div className="col">
          <Image
            src={KenPic}
            alt="Ken Truong"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
        <div className="col">
          <h6>Ken Truong</h6>
          <h6 className={classes.empTitle}>Editor & Designer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            est voluptatem tempore aut ex? Deleniti, repellat fugit minima amet
            sed corrupti, nihil eveniet hic aut a magni iusto expedita cum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
