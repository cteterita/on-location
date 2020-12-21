import React from 'react';
import PropTypes from 'prop-types';

import AsyncSelect from 'react-select/async';
import * as Nominatim from 'nominatim-browser';

import './Search.css';

function Search(props) {
  const { defaultSearch, onSearchSelect } = props;

  // TODO: Should I be caching/rate-limiting?
  const loadOptions = (searchTerm) => Nominatim.geocode({
    q: searchTerm,
    addressdetails: true,
  })
    .then((res) => res);
  return (
    <div className="main-search-bar">
      <AsyncSelect
        defaultInputValue={defaultSearch}
        loadOptions={loadOptions}
        getOptionLabel={(o) => o.display_name}
        onChange={onSearchSelect}
      />
    </div>
  );
}

Search.propTypes = {
  defaultSearch: PropTypes.string,
  onSearchSelect: PropTypes.func.isRequired,
};

Search.defaultProps = {
  defaultSearch: 'Type to search for a location',
};

export default Search;
