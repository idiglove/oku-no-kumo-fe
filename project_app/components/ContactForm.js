import Button from '@mui/material/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      <h1>Contact Us</h1>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                label="FirstName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                label="LastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                label="Message"
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 2px;
  margin-top: 260px;
  height: 500px;
  width: 70%;
  margin-left: 200px;
`;
