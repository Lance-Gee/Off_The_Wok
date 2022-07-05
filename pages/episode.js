import React from 'react';
import AllEpisodes from '../components/AllEpisodes';
import Footer from '../components/Footer';
import NavBar from '../components/ResponsiveAppBar';

export default function episode() {
  return (
    <div>
      <NavBar />
      <AllEpisodes />
      <Footer />
    </div>
  );
}
