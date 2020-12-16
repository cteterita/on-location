import React from 'react';

import './ResultMarker.css';

function resultMarker(props) {
  const { result, left, top } = props;
  // TODO: Style markers & implement expansion
  return (
    <div className="result-marker" style={{ left, top }}>
      <span>
        <a href={result.link} target="_blank" rel="noreferrer" className="result-link">
          {` ${result.title} >>`}
        </a>
      </span>
    </div>
  );
}

export default resultMarker;
