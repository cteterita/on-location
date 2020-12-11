import React, { useState } from 'react';

import './Landing.css';

function Landing() {
  const [searchTerm, setSearchTerm] = useState('San Francisco');
  const submitForm = (e) => {
    e.preventDefault();
    // TODO
  };
  return (
    <section className="landing">
      <h3>Where are you going?</h3>
      <p>Search for books, movies, and TV shows to take you away to your favorite destinations.</p>
      <form id="main-search" onSubmit={submitForm}>
        <div className="main-search-bar">
          <input id="location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button id="search" type="submit">Search</button>
        </div>
      </form>
    </section>
  );
}

export default Landing;
