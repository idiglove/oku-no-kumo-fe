import { render, screen } from '@testing-library/react';
import HeaderButtons, { validateInput } from '../styled';

describe('HeaderButtons', () => {
  it('renders the Login on Header page', () => {
    const buttonText = screen.getByLabelText('Login');
    render(<HeaderButtons>{buttonText}</HeaderButtons>);
    expect(buttonText).toBeInTheDocument();
  });
});
