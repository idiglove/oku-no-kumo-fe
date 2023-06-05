import { useState, useContext, useEffect } from 'react';
import { GlobalStateContext } from '../pages/_app';
import styled from 'styled-components';
import { CFormInput, CFormFloating, CFormLabel } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function UserLogin() {
  const router = useRouter();
  const { token, setToken } = useContext(GlobalStateContext);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token != null) {
      router.push('adminpage');
    }
  }, []);

  async function handleLoginClick() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/auth`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailOrUsername: emailOrUsername,
          password: password
        })
      }
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
      const tokenReceived = resBody.access;
      setToken(tokenReceived);
      router.push('/adminpage');
    }
  }

  return (
    <LoginLayout>
      <AdminLoginTitle>Login</AdminLoginTitle>
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

const LoginLayout = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;
}
`;

const AdminLoginTitle = styled.span`
  color: #ffffff;
  line-height: 63.99px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
`;

const AdminLoginDialog = styled.div`
  background-color: #234c4c;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DialogTitle = styled.h3`
  background-color: #2b4040;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  padding: 1rem;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  text-align: left;
`;

const FormContainer = styled.div`
  padding: 2rem;
`;

const DialogText = styled.h6`
  color: rgb(255, 255, 255);
  font-family: 'Rubik', sans-serif;
  text-align: left;
  margin-bottom: 2rem;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const LoginButton = styled.button`
  margin-top: 1rem;
  background-color: rgb(250, 250, 235);
  color: rgb(0, 0, 0);
  font-family: Rubik, sans-serif;
  border-radius: 0.625rem;
  font-size: 1.25rem;
  min-width: 10rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
`;
