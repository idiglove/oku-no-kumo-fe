import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { HeaderButtons } from '../styled';

describe('HeaderButtons component', () => {
  it('should render Header component correctly', () => {
    render(<Header />);
    const element = screen.getByRole('Login');
    expect(element).toBeInTheDocument();
  });
});
