import React from 'react';
import PropTypes from 'prop-types';

import { stringify } from 'query-string';

import { Link } from 'react-router-dom';

// TODO: Style suggestions
function Suggestion(props) {
  const { displayName, lat, lon } = props;
  const linkTo = {
    pathname: '/results',
    search: stringify({ lat, lon, zoom: 11 }),
  };
  return (
    <li><Link to={linkTo}>{displayName}</Link></li>
  );
}

Suggestion.propTypes = {
  displayName: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default Suggestion;
