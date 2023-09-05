import { useState } from 'react';
import Image from 'next/image';
import {
  LoginDialog,
  DialogText,
  DialogTitle,
  FormContainer,
  LoginButton
} from './styled';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function JoinUs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(true);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

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
    <LoginDialog>
      <DialogTitle>JoinUs</DialogTitle>
      <FormContainer>
        <DialogText>Fill out and Submit</DialogText>
        <CFormFloating style={{ marginBottom: '1rem' }}>
          <StyledCFormInput type="firstName" id="firstName" />
          <StyledCFormLabel htmlFor="floatingInput">firstName</StyledCFormLabel>
        </CFormFloating>
        <CFormFloating style={{ marginBottom: '1rem' }}>
          <StyledCFormInput type="lastName" id="lastName" />
          <StyledCFormLabel htmlFor="floatingInput">lastName</StyledCFormLabel>
        </CFormFloating>
        <CFormFloating style={{ marginBottom: '1rem' }}>
          <StyledCFormInput
            type="email"
            id="email"
            value={email}
           
          />
          <StyledCFormLabel htmlFor="floatingInput">Email</StyledCFormLabel>
        </CFormFloating>
        <CFormFloating style={{ marginBottom: '1rem' }}>
          <StyledCFormInput
            type="password"
            id="password"
            value={password}
            
          />
          <StyledCFormLabel htmlFor="floatingInput">Password</StyledCFormLabel>
        </CFormFloating>
        <p style={{ color: 'white' }}>Choose an Avatar</p>
        <div style={{ display: 'flex' }}>
          <Image src="/BOY.svg" alt="image" width={100} height={100} />
          <Image src="/DRAGON.svg" alt="image" width={100} height={100} />
          <Image src="/WIZARD.svg" alt="image" width={100} height={100} />
          <Image src="/ALPACA.svg" alt="image" width={100} height={100} />
        </div>
        <div>
          <LoginButton
            style={{ color: 'black', marginLeft: '200px' }}
            onClick={handleSignUp}
          >
            SignUp
          </LoginButton>
        </div>
      </FormContainer>
    </LoginDialog>
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
