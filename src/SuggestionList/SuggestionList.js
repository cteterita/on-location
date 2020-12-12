import React from 'react';
import PropTypes from 'prop-types';

import Suggestion from '../Suggestion/Suggestion';

function SuggestionList(props) {
  const { suggestions } = props;
  return (
    <ul>
      {suggestions.map((s) => <Suggestion displayName={s.display_name} />)}
    </ul>
  );
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf({
    display_name: PropTypes.string,
  }),
};

SuggestionList.defaultProps = {
  suggestions: [],
};

export default SuggestionList;
