import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import { stringify } from 'query-string';

// import Search from '../Search/Search';

import './AddMarker.css';

function AddMarker() {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState(null);
  // const [lat, setLat] = useState(0);
  // const [lon, setLon] = useState(0);

  const handleSubmit = () => {
    // TODO: Flesh this out once the API is built
    console.log(`Title: ${title}`);
    console.log(`Type: ${type}`);
    console.log(`Link: ${link}`);
    history.push({
      // search: stringify({ lat, lon, zoom: 11 }),
    });
  };
  /* const handleSearchSelect = (selection) => {
    setLat(selection.lat);
    setLon(selection.lon);
  }; */
  return (
    <div className="add-marker-modal">
      <h3>Add a new marker!</h3>
      <form className="add-marker-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input id="title" value={title} onChange={setTitle} required />
        </label>
        <label htmlFor="type">
          Type:
          <select id="link" value={type} onChange={setType} required>
            <option value="book">Book</option>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
        </label>
        <label htmlFor="link">
          Link:
          <input id="link" value={link} onChange={setLink} required />
        </label>
        {/* <span>
          Location:
          <Search id="location" onSelect={handleSearchSelect} />
        </span> */ }
        <button type="submit">Add Marker</button>
      </form>
    </div>
  );
}

export default AddMarker;
