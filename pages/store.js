import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/ResponsiveAppBar';

export default function store() {
  return (
    <div>
      <NavBar />
      <h1 className="mt-5 text-center pb-5">Store Coming Soon!</h1>
      <Footer />
    </div>
  );
}
