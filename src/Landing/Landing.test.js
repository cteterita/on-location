import React from 'react';
import { render, screen } from '@testing-library/react';

import Landing from './Landing';

test('renders without errors', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/where are you going/i);
  expect(linkElement).toBeInTheDocument();
});
