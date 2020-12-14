import React from 'react';
import { render, screen } from '@testing-library/react';

import Suggestion from './Suggestion';

test('renders without errors', () => {
  const displayName = 'Terrapin Crossroads';
  render(<Suggestion displayName={displayName} key="1" />);
  expect(screen.getByRole('listitem')).toMatchSnapshot();
});
