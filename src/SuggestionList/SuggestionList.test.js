import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import SuggestionList from './SuggestionList';

const exampleSuggestions = [
  {
    display_name: 'example 1',
    place_id: 1,
    lat: 1,
    lon: 1,
  },
  {
    display_name: 'example 2',
    place_id: 2,
    lat: 1,
    lon: 1,
  },
];

test('renders without errors', () => {
  render(<BrowserRouter><SuggestionList suggestions={exampleSuggestions} /></BrowserRouter>);
  expect(screen.getByRole('list')).toMatchSnapshot();
});
