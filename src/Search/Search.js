import React, { useState, useEffect } from 'react';
import * as Nominatim from 'nominatim-browser';

import './Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('San Francisco');
  const submitForm = (e) => {
    e.preventDefault();
    // TODO
    Nominatim.geocode({
      q: searchTerm,
      addressdetails: true,
    })
      .then((res) => console.log(res));
  };
  useEffect(() => {
    Nominatim.geocode({
      q: searchTerm,
      addressdetails: true,
    })
      .then((res) => console.log(res));
  }, [searchTerm]);
  return (
    <form id="main-search" onSubmit={submitForm}>
      <div className="main-search-bar">
        <input id="location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button id="search" type="submit">Search</button>
      </div>
    </form>
  );
}

export default Search;
