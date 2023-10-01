import { useState } from 'react';
import {
  LoginDialog,
  LoginButton,
  DialogText,
  DialogTitle,
  UserLoginLayout,
  LoginButtonContainer,
  FormContainer
} from './styled';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function UserLogin() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Login = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const Logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedIn(false);
  };

  return (
    <UserLoginLayout>
      <LoginDialog>
        <DialogTitle>Login</DialogTitle>
        <FormContainer>
          <DialogText>Welcome!</DialogText>
          {!isLoggedIn ? (
            <>
              <CFormFloating style={{ marginBottom: '1rem' }}>
                <StyledCFormInput
                  type="username"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <StyledCFormLabel htmlFor="floatingInput">
                  Username / Email
                </StyledCFormLabel>
              </CFormFloating>
              <CFormFloating>
                <StyledCFormInput
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <StyledCFormLabel htmlFor="exampleFormControlTextarea1">
                  Password
                </StyledCFormLabel>
              </CFormFloating>
              <LoginButtonContainer>
                <LoginButton type="submit" onClick={Login}>
                  Login
                </LoginButton>
              </LoginButtonContainer>
            </>
          ) : (
            <>
              <h1>User is logged in</h1>
              <Button
                variant="contained"
                style={{ color: 'red' }}
                onClick={Logout}
              >
                logout user
              </Button>
            </>
          )}
        </FormContainer>
      </LoginDialog>
    </UserLoginLayout>
  );
}

const StyledCFormInput = styled(CFormInput)`
  background-color: #2b2b2b;
  color: #ffffff;
  &:focus {
    background-color: #2b2b2b !important;
    color: #ffffff;
  }
`;
const StyledCFormLabel = styled(CFormLabel)`
  color: gray;
`;
export default UserLogin;
