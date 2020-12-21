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
  const [link, setLink] = useState('http://');
  const [media, setMedia] = useState('movie');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do some light data validation before constructing the pin object
    if (!lat || !lon) {
      setError('Invalid location.');
      return;
    }
    const pin = {
      title,
      media,
      link,
      lat,
      lon,
    };
    fetch(`${config.SERVER_URL}/pins`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(pin),
    })
      .then((response) => {
        if (!response.ok) {
          // Handle errors returned by the API
          throw response;
        }
        history.push({
          search: stringify({ lat, lon, zoom: 11 }),
        });
        close();
      })
      .catch((err) => {
        err.text()
          .then((text) => setError(text));
      });
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
        <span>{error}</span>
        <button type="submit">Add pin</button>
      </form>
    </div>
  );
}

AddPin.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddPin;
