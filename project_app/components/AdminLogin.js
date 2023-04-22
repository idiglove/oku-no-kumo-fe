import { useState, useContext, useEffect, useRef } from "react";
import { GlobalStateContext } from '../pages/_app';
import styled from 'styled-components';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css';

import Swal from 'sweetalert2';

import { useRouter } from 'next/router';

import { StyledCFormInput, StyledCFormLabel, FormTitle, DialogTitle, FormContainer, DialogText, ActionButtonContainer, ActionButton} from '../components/formstyled';

export default function AdminLogin() {
    const router = useRouter();
    const { token, setToken } = useContext(GlobalStateContext);
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);


    useEffect(() => {
        if (token != null) {
            // Verify that token is not tampered with using api
            router.push('adminpage');
        }
    }, [])

    async function handleLoginClick() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/admin/auth`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    emailOrUsername: emailOrUsername,
                    password: password,
                }),
            }
        );


        const resBody = await response.json();


        if (!response.ok) {
            Swal.fire({
                title: resBody.heading,
                text: resBody.message,
                icon: "error",
            });
            return;
        } else {
            // Successfully logged in
            //TO DO: Persist token between browser sessiosn. Send token through http only cookie to secure against xss, then use samesite strict to protect against csrf. this is instead of storing in local storage.
            const tokenReceived = resBody.access;
            setToken(tokenReceived);
            router.push('/adminpage');

        }

  useEffect(() => {
    if (token != null) {
      // Verify that token is not tampered with using api
      router.push('adminpage');
    }
  }, []);

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && passwordRef.current === document.activeElement) {
          // Enter key pressed and password input is focused, trigger login click
          handleLoginClick();
        }
      };

    return (
        <FormLayout>
            <FormTitle>Admin Login</FormTitle>

            <AdminLoginDialog>
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
                        <StyledCFormLabel htmlFor="floatingInput" 
                        >
                            Username / Email
                        </StyledCFormLabel>
                    </CFormFloating>
                    <CFormFloating>
                        <StyledCFormInput
                            type="password"
                            id="adminPassword"
                            placeholder="Password"
                            value={password}
                            ref={passwordRef} 
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <StyledCFormLabel
                            htmlFor="exampleFormControlTextarea1"
                        >
                            Password
                        </StyledCFormLabel>
                    </CFormFloating>

                    <ActionButtonContainer>
                        <ActionButton onClick={handleLoginClick}>
                            Login
                        </ActionButton>
                    </ActionButtonContainer>
                </FormContainer>
            </AdminLoginDialog>
        </FormLayout>
    );

    const resBody = await response.json();

    if (!response.ok) {
      Swal.fire({
        title: resBody.heading,
        text: resBody.message,
        icon: 'error'
      });
      return;
    } else {
      // Successfully logged in
      //TO DO: Persist token between browser sessiosn. Send token through http only cookie to secure against xss, then use samesite strict to protect against csrf. this is instead of storing in local storage.
      const tokenReceived = resBody.access;
      setToken(tokenReceived);
      router.push('/adminpage');
    }
  }

  return (
    <LoginLayout>
      <AdminLoginTitle>Admin Login</AdminLoginTitle>

      <AdminLoginDialog>
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
      </AdminLoginDialog>
    </LoginLayout>
  );
}


const AdminLoginDialog = styled.div`
  background-color: #234c4c;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const FormLayout = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;

  @media (max-width: 767px) {
    margin-top: 10rem;
  }
`;
