import { useState, useEffect } from 'react';
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
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function UserLogin() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginClick() {}

  function handleDialogClose() {}

  useEffect(() => {
    console.log('render!');
  });

  return (
    <UserLoginLayout>
      <LoginDialog>
        <DialogTitle>
          Login
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDialogClose}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
        </DialogTitle>
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

const IconButton = styled.button`
  color: white;
  margin-left: 260px;
`;
