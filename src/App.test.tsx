import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  window.scrollTo = jest.fn();
});

test('renders header title', () => {
  render(<App />);
  const headerTitle = screen.getByText(/testimonials i've left/i);
  expect(headerTitle).toBeInTheDocument();
});
