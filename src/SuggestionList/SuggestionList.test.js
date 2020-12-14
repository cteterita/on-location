import React from 'react';
import { render, screen } from '@testing-library/react';

import SuggestionList from './SuggestionList';

const exampleSuggestions = [
  {
    display_name: 'example 1',
    place_id: 1,
  },
  {
    display_name: 'example 2',
    place_id: 2,
  },
];

test('renders without errors', () => {
  render(<SuggestionList suggestions={exampleSuggestions} />);
  expect(screen.getByRole('list')).toMatchSnapshot();
});
