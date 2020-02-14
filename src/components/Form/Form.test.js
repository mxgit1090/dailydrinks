import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('required field "name"', () => {
  const formTest = render(<Form />);
  const submitButton = formTest.getByText('Submit');
  fireEvent.click(submitButton);

  const nameInput = formTest.getByPlaceholderText('Please input name');
  expect(nameInput.className).toMatch('form__input-alert');
});

describe('number field "price"', () => {
  test('non-numeric', () => {
    const formTest = render(<Form />);
    const priceInput = formTest.getByPlaceholderText('Please input price number');
    
    fireEvent.change(priceInput, { target: { value: 'a' } });
    
    expect(priceInput.value).toEqual('');
  });

  test('zero-prefix number', () => {
    const formTest = render(<Form />);
    const priceInput = formTest.getByPlaceholderText('Please input price number');

    fireEvent.change(priceInput, { target: { value: '0123' } });

    expect(priceInput.value).toEqual('123');
  });

  test('submitted numeric value', () => {
    const submit = jest.fn();
    const formTest = render(<Form order={{ name: 'default' }} submit={submit} />);
    const priceInput = formTest.getByPlaceholderText('Please input price number');
    const submitButton = formTest.getByText('Submit');

    fireEvent.change(priceInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    expect(submit.mock.calls[0][0].price).toEqual(123);
  });
});

test('functional buttons', () => {
  const order = {
    name: 'default',
    price: 100
  };
  const submit = jest.fn();
  const cancel = jest.fn();
  const { getByText } = render(
    <Form
      order={order}
      submit={submit}
      cancel={cancel}
    />
  );
  const cancelButton = getByText('Cancel');
  const sumbitButton = getByText('Submit');

  fireEvent.click(cancelButton);
  fireEvent.click(sumbitButton);

  expect(cancel).toBeCalled();
  expect(submit).toBeCalledWith(expect.objectContaining(order));
});

