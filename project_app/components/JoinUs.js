import { useState } from 'react';
import Image from 'next/image';
import {
  LoginDialog,
  DialogText,
  DialogTitle,
  UserLoginLayout,
  FormContainer
} from './styled';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function JoinUs() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    console.log(email);
    console.log(password);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <UserLoginLayout>
      <LoginDialog>
        <DialogTitle>JoinUs</DialogTitle>
        <FormContainer>
          <DialogText>Fill out and Submit</DialogText>
          <CFormFloating style={{ marginBottom: '1rem' }}>
            <StyledCFormInput type="firstName" id="firstName" />
            <StyledCFormLabel htmlFor="floatingInput">
              firstName
            </StyledCFormLabel>
          </CFormFloating>
          <CFormFloating style={{ marginBottom: '1rem' }}>
            <StyledCFormInput type="lastName" id="lastName" />
            <StyledCFormLabel htmlFor="floatingInput">
              lastName
            </StyledCFormLabel>
          </CFormFloating>
          <CFormFloating style={{ marginBottom: '1rem' }}>
            <StyledCFormInput
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <StyledCFormLabel htmlFor="floatingInput">Email</StyledCFormLabel>
          </CFormFloating>
          <CFormFloating style={{ marginBottom: '1rem' }}>
            <StyledCFormInput
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <StyledCFormLabel htmlFor="floatingInput">
              Password
            </StyledCFormLabel>
          </CFormFloating>

          <div style={{ display: 'flex' }}>
            <p>Choose an Avatar</p>
            <Image src="/avatar.png" alt="image" width={100} height={100} />
            <Image src="/avatar.png" alt="image" width={100} height={100} />
          </div>
          <Button variant="contained" style={{ color: 'red' }}>
            Sign Up
          </Button>
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
