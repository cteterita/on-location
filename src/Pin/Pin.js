import React from 'react';
import PropTypes from 'prop-types';

import './Pin.css';

function Pin(props) {
  const { result, left, top } = props;
  const classString = `pin ${result.media}`;
  return (
    <div className={classString} style={{ left, top }}>
      <span>
        <a href={result.link} target="_blank" rel="noreferrer" className="pin-link">
          {` ${result.title} >>`}
        </a>
      </span>
    </div>
  );
}

Pin.propTypes = {
  result: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    media: PropTypes.string,
  }).isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
};

Pin.defaultProps = {
  top: 0,
  left: 0,
};

export default Pin;
