import Button from '@mui/material/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DialogTitle, LoginButton } from './styled';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message
    };
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');

        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ContactContainer component="main" maxWidth="xs">
      <DialogTitle style={{ textAlign: 'center' }}>Contact Us</DialogTitle>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={6}>
            <CFormFloating style={{ marginBottom: '1rem' }}>
              <StyledCFormInput
                type="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <StyledCFormLabel htmlFor="floatingInput">
                FirstName
              </StyledCFormLabel>
            </CFormFloating>
          </Grid>
          <Grid item xs={10} sm={6}>
            <CFormFloating style={{ marginBottom: '1rem' }}>
              <StyledCFormInput
                type="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <StyledCFormLabel htmlFor="floatingInput">
                LastName
              </StyledCFormLabel>
            </CFormFloating>
          </Grid>
          <Grid item xs={12}>
            <CFormFloating style={{ marginBottom: '1rem' }}>
              <StyledCFormInput
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <StyledCFormLabel htmlFor="floatingInput">Email</StyledCFormLabel>
            </CFormFloating>
          </Grid>
          <Grid item xs={12}>
            <CFormFloating style={{ marginBottom: '1rem' }}>
              <StyledCFormInput
                type="message"
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <StyledCFormLabel htmlFor="floatingInput">
                Message
              </StyledCFormLabel>
            </CFormFloating>
          </Grid>
        </Grid>
        <LoginButton type="submit">Submit</LoginButton>
      </Box>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  background-color: rgb(35, 76, 76);
  position: absolute;
  top: 2px;
  margin-top: 240px;
  height: 500px;
  width: 70%;
  margin-left: 200px;
`;
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
