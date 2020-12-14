import React from 'react';

import Search from '../Search/Search';

import './Landing.css';

function Landing() {
  return (
    <section className="landing">
      <h3>Where are you going?</h3>
      <p>Search for books, movies, and TV shows to take you away to your favorite destinations.</p>
      <Search defaultSearch="San Francisco" />
    </section>
  );
}

export default Landing;
