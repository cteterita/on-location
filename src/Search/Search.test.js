import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

test('renders without errors', () => {
  render(<Search />);
  expect(screen.getByRole('textbox')).toHaveValue('San Francisco');
});
