import React from 'react';
import PropTypes from 'prop-types';

import Suggestion from '../Suggestion/Suggestion';

function SuggestionList(props) {
  const { suggestions } = props;
  return (
    <ul>
      {suggestions.map((s) => {
        const { lat, lon } = s;
        return (
          <Suggestion
            displayName={s.display_name}
            lat={lat}
            lon={lon}
            key={s.place_id}
          />
        );
      })}
    </ul>
  );
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string,
      place_id: PropTypes.int,
    }),
  ),
};

SuggestionList.defaultProps = {
  suggestions: [],
};

export default SuggestionList;
