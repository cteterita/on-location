import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import ResultMap from './ResultMap';

test('renders without errors', () => {
  render(<BrowserRouter><ResultMap /></BrowserRouter>);
  // This will need to change dramatically when we use real data
  const linkElement = screen.getByText(/pigeon/i);
  expect(linkElement).toBeInTheDocument();
});
