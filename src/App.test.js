import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Daily Drinks/i);
  expect(linkElement).toBeInTheDocument();
});

test('click add button to change page', () => {
  const { getByText } = render(<App />);
  const createButton = getByText(/Add/i);
  fireEvent.click(createButton);
  const title = getByText(/Add Order/i);
  expect(title).toBeInTheDocument();
});
