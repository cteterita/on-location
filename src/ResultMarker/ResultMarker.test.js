import React from 'react';

import { render, screen } from '@testing-library/react';

import ResultMarker from './ResultMarker';

const example = {
  title: 'The Joy Luck Club',
  type: 'book',
  lat: 37.7790262,
  lon: -122.4199061,
  link: 'https://www.goodreads.com/book/show/7763.The_Joy_Luck_Club',
};

test('renders without errors', () => {
  render(<ResultMarker result={example} />);
  const linkElement = screen.getByText(/joy/i);
  expect(linkElement).toBeInTheDocument();
});
