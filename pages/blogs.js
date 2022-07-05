import React from 'react';
import Blogs from '../components/Blogs';
import NavBar from '../components/ResponsiveAppBar';
import classes from '../styles/blogs.module.css';

export default function blogs() {
  return (
    <div>
      <NavBar />
      <h1 className={`mt-5 text-center ${classes.header}`}>
        off the wok blogs
      </h1>
      <Blogs />
    </div>
  );
}
