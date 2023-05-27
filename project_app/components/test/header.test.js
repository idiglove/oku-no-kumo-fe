import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render a button with login text', () => {
  render(<Header />);
});
