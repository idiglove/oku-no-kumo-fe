import { render, screen } from '@testing-library/react';
import Header from '../Header';
import Button from '../Header';
import { HeaderButtons } from '../styled';

//test if login is rendered on button

describe('HeaderButtons ', () => {
  it('renders the Login on Header page', () => {
    const { getByText } = render(
      <HeaderButtons>
        <Button />
      </HeaderButtons>
    );
    const element = screen.getByLabelText('Login');
    expect(element).toBeInTheDocument();
    expect(getByText(element)).toBeInTheDocument();
  });
});

//test if Join Us! is rendered on button

describe('HeaderButtons ', () => {
  it('renders the Login on Header page', () => {
    const { getByText } = render(<HeaderButtons />);
    const element = screen.getByLabelText('Join Us!');
    expect(element).toBeInTheDocument();
    expect(getByText(element)).toBeInTheDocument();
  });
});

test('renders the Login on the Header Page', () => {
  render(<App />);
  expect(screen.getByRole('button')).toHaveTextContent(/Doggy Directory/);
  expect(screen.getByRole('combobox')).toHaveDisplayValue('Select a breed');
});
