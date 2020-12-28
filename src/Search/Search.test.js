import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from './Search';

test('renders without errors', () => {
  render(<Search defaultSearch="default" onSearchSelect={() => true} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
