import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

import './ResultMap.css';

function ResultMap() {
  const sanFrancisco = [37.7790262, -122.4199061];

  const [center, setCenter] = useState(sanFrancisco);
  const [zoom, setZoom] = useState(11);
  return (
    <div className="result-map">
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={({ newCenter, newZoom }) => { setCenter(newCenter); setZoom(newZoom); }}
      >
        <Marker
          anchor={sanFrancisco}
          color="red"
        />
      </Map>
    </div>
  );
}

export default ResultMap;
