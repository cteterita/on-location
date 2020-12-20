import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { stringify } from 'query-string';

import Search from '../Search/Search';
import config from '../config';

import './AddPin.css';

function AddPin(props) {
  const { close } = props;
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [media, setMedia] = useState('movie');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin = {
      title,
      media,
      link,
      lat,
      lon,
    };
    // TODO: Data validation
    fetch(`${config.SERVER_URL}/pins`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(pin),
    });
    // TODO: feedback & error handling
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
    close();
  };
  const handleSearchSelect = (selection) => {
    setLat(selection.lat);
    setLon(selection.lon);
  };
  return (
    <div className="add-pin-modal">
      <h3>Add a new pin!</h3>
      <form className="add-pin-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input id="title" value={title} onChange={(i) => setTitle(i.target.value)} required />
        </label>
        <label htmlFor="media">
          Type:
          <select id="media" onChange={(i) => setMedia(i.target.value)} required>
            <option value="movie">Movie</option>
            <option value="book">Book</option>
            <option value="tv_show">TV Show</option>
          </select>
        </label>
        <label htmlFor="link">
          Link:
          <input id="link" value={link} onChange={(i) => setLink(i.target.value)} required />
        </label>
        <span>
          Location:
          <Search id="location" onSearchSelect={handleSearchSelect} />
        </span>
        <button type="submit">Add pin</button>
      </form>
    </div>
  );
}

AddPin.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddPin;
