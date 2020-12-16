import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import AddMarker from './AddMarker';

test('renders without errors', () => {
  render(<BrowserRouter><AddMarker close={() => true} /></BrowserRouter>);
  const input = screen.getByRole('combobox');
  expect(input).toHaveValue('movie');
});
