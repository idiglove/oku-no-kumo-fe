import { useState } from 'react';
import {
  LoginTitle,
  LoginDialog,
  LoginButton,
  DialogText,
  DialogTitle,
  LoginLayout,
  LoginButtonContainer,
  FormContainer
} from './styled';
import styled from 'styled-components';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function UserLogin() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginClick() {}

  return (
    <LoginLayout>
      <LoginTitle>Login</LoginTitle>
      <LoginDialog>
        <DialogTitle>Login</DialogTitle>
        <FormContainer>
          <DialogText>Welcome!</DialogText>
          <CFormFloating style={{ marginBottom: '1rem' }}>
            <StyledCFormInput
              type="email"
              id="emailOrUsername"
              placeholder="name@example.com"
              value={emailOrUsername}
              onChange={(e) => {
                setEmailOrUsername(e.target.value);
              }}
            />
            <StyledCFormLabel htmlFor="floatingInput">
              Username / Email
            </StyledCFormLabel>
          </CFormFloating>
          <CFormFloating>
            <StyledCFormInput
              type="password"
              id="adminPassword"
              placeholder="Password"
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
            <LoginButton onClick={handleLoginClick}>Login</LoginButton>
          </LoginButtonContainer>
        </FormContainer>
      </LoginDialog>
    </LoginLayout>
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
