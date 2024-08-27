import { render, screen } from '@testing-library/react';
import UserProfile from './components/UserProfile';

test('renders loading', () => {
  render(<UserProfile />);
  const textElement = screen.getByText(/Loading.../i);
  expect(textElement).toBeInTheDocument();
});
