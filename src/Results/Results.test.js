import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import Results from './Results';

test('renders without errors', () => {
  render(<BrowserRouter><Results /></BrowserRouter>);
  expect(screen.getByRole('textbox')).toHaveValue('');
});
