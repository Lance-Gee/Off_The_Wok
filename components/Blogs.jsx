import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ToText from '../utils/toText';
import classes from '../styles/blogs.module.css';

export default function Blogs() {
  const mediumURL =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@offthewok';
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        console.log(info.data.items);
        setBlog(info.data.items);
      })
      .catch((err) => setBlog({ error: err.message }));
  }, []);

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        {blog.map((post, index) => (
          <div key={index} className="col pb-5">
            <div className="card">
              <img
                src={post.thumbnail}
                className={`card-img-top ${classes.image}`}
                alt="post-image"
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{`${ToText(
                  post.description.substring(0, 1000)
                )}...`}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Read Full Blog
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
