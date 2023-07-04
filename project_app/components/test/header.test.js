import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HeaderButtons } from '../styled';
import HeaderButton from '../Header';

test('Button displays "Login"', () => {
  const { getByText } = render(
    <HeaderButtons>
      <HeaderButton />
    </HeaderButtons>
  );
  const loginButton = getByText('Login');
  expect(loginButton).toBeInTheDocument();
});
