import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { stringify } from 'query-string';
import AsyncSelect from 'react-select/async';
import * as Nominatim from 'nominatim-browser';

import './Search.css';

function Search(props) {
  const { defaultSearch } = props;
  const history = useHistory();

  // TODO: Should I be caching/rate-limiting?
  const loadOptions = (searchTerm) => Nominatim.geocode({
    q: searchTerm,
    addressdetails: true,
  })
    .then((res) => res);
  const onSelect = (selection) => {
    const { lat, lon } = selection;
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
  };
  return (
    <div className="main-search-bar">
      <AsyncSelect
        defaultInputValue={defaultSearch}
        loadOptions={loadOptions}
        getOptionLabel={(o) => o.display_name}
        onChange={onSelect}
      />
    </div>
  );
}

Search.propTypes = {
  defaultSearch: PropTypes.string,
};

Search.defaultProps = {
  defaultSearch: '',
};

export default Search;
