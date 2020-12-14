import React from 'react';
import PropTypes from 'prop-types';

function Suggestion(props) {
  const { displayName } = props;
  return <li>{displayName}</li>;
}

Suggestion.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default Suggestion;
