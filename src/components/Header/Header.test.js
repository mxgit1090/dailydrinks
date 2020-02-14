import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('formOpen prop false', () => {
  const headerTest = render(<Header formOpen={false} />);
  const headerTitle = headerTest.getByText('Daily Drinks');

  expect(headerTitle).toBeInTheDocument();
  expect(headerTest.getByText('Add')).toBeInTheDocument();
});

test('formOpen prop true', () => {
  const headerTest = render(<Header formOpen={true} />);
  const headerTitle = headerTest.getByText('Add Order');
  
  expect(headerTitle).toBeInTheDocument();
  expect(() => { headerTest.getByText('Add'); }).toThrow();
});

test('orderExist prop true', () => {
  const headerTest = render(<Header formOpen={true} orderExist={true} />);
  const headerTitle = headerTest.getByText('Edit Order');
  
  expect(headerTitle).toBeInTheDocument();
  expect(() => { headerTest.getByText('Add'); }).toThrow();
});
