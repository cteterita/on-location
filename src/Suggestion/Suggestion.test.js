import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Suggestion from './Suggestion';

test('renders without errors', () => {
  const displayName = 'Terrapin Crossroads';
  render(<BrowserRouter><Suggestion displayName={displayName} key={1} lat={1} lon={1} /></BrowserRouter>);
  expect(screen.getByRole('listitem')).toMatchSnapshot();
});
