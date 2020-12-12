import React, { useState } from 'react';

import './Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('San Francisco');
  const submitForm = (e) => {
    e.preventDefault();
    // TODO
  };
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
