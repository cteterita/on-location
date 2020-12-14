import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import * as Nominatim from 'nominatim-browser';

import SuggestionList from '../SuggestionList/SuggestionList';
import './Search.css';

function Search(props) {
  const { defaultSearch } = props;

  const [searchTerm, setSearchTerm] = useState(defaultSearch);
  const [suggestions, setSuggestions] = useState([]);
  const newSearch = useCallback(() => {
    Nominatim.geocode({
      q: searchTerm,
      addressdetails: true,
    })
      .then((res) => setSuggestions(res));
  }, [searchTerm]);
  const submitForm = (e) => {
    e.preventDefault();
    newSearch();
  };
  useEffect(() => {
    if (searchTerm && searchTerm.length % 2 === 0) {
      newSearch();
    }
  }, [searchTerm, newSearch]);
  return (
    <form id="main-search" onSubmit={submitForm}>
      <div className="main-search-bar">
        <input id="location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button id="search" type="submit">Search</button>
      </div>
      <SuggestionList suggestions={suggestions} />
    </form>
  );
}

Search.propTypes = {
  defaultSearch: PropTypes.string,
};

Search.defaultProps = {
  defaultSearch: '',
};

export default Search;
