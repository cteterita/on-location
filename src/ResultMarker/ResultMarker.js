import React from 'react';

import './ResultMarker.css';

function resultMarker(props) {
  const { result, left, top } = props;
  return (
    <div className="result-marker" style={{ left, top }}>
      <span>{result.title}</span>
    </div>
  );
}

export default resultMarker;
