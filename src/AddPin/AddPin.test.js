import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import AddPin from './AddPin';

test('renders without errors', () => {
  render(<BrowserRouter><AddPin close={() => true} /></BrowserRouter>);
  const input = screen.getByRole('combobox');
  expect(input).toHaveValue('movie');
});
