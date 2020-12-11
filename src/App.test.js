import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without errors', () => {
  render(<App />);
  const linkElement = screen.getByText(/on location/i);
  expect(linkElement).toBeInTheDocument();
});
