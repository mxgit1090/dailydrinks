import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TYPE } from './Button.const';
import Button from './Button';

test('button click event triggered', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Testa</Button>);
  const button = getByText('Testa');
  fireEvent.click(button);
  expect(onClick).toBeCalled();
});

test('button className changed by type', () => {
  const buttonTest = render(<Button>button</Button>);
  expect(buttonTest.getByText('button').className).toMatch(TYPE.NORMAL);
  buttonTest.rerender(<Button type={TYPE.PRIMARY}>button</Button>);
  expect(buttonTest.getByText('button').className).toMatch(TYPE.PRIMARY);
  buttonTest.rerender(<Button type={TYPE.DANGER}>button</Button>);
  expect(buttonTest.getByText('button').className).toMatch(TYPE.DANGER);
});

