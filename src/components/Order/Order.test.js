import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Order from './Order';

test('functional buttons', () => {
  const onEdit = jest.fn();
  const onDelete = jest.fn();
  const orderTest = render(
    <Order
      name="test"
      price={100}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
  const editButton = orderTest.getByText('Edit');
  const deleteButton = orderTest.getByText('Delete');

  fireEvent.click(editButton);
  fireEvent.click(deleteButton);
  
  expect(onEdit).toBeCalled();
  expect(onDelete).toBeCalled();
});
