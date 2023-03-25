import { useState } from "react";
import styled from "styled-components";
//import styles from "../styles/AdminLogin.module.css";
import { CFormInput, CFormFloating, CFormLabel } from "@coreui/react";

import "@coreui/coreui/dist/css/coreui.min.css";

import Swal from "sweetalert2";

export default function AdminLogin() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

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

    console.log(resBody);

    if (!response.ok) {
      Swal.fire({
        title: resBody.heading,
        text: resBody.message,
        icon: "error",
      });
      return;
    }

    // Successfully logged in
    //TODO: store the jwt in resBody.access in local storage and the state and redirect to admin dashboard/page
    console.log(resBody);
  }

  return (
    <LoginLayout>
      <AdminLoginTitle>Admin Login</AdminLoginTitle>

      <AdminLoginDialog>
        <DialogTitle>Login</DialogTitle>

        <FormContainer>
          <DialogText>Welcome!</DialogText>

          <CFormFloating style={{marginBottom: '1rem'}}>
            <CFormInput
              type="email"
              id="emailOrUsername"
              placeholder="name@example.com"
              value={emailOrUsername}
              onChange={(e) => {
                setEmailOrUsername(e.target.value);
              }}
              style={{ backgroundColor: "#2B2B2B", color: "#FFFFFF" }}
            />
            <CFormLabel htmlFor="floatingInput" style={{ color: "gray" }}>
              Username / Email
            </CFormLabel>
          </CFormFloating>
          <CFormFloating>
            <CFormInput
              type="password"
              id="adminPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ backgroundColor: "#2B2B2B", color: "#FFFFFF" }}
            />
            <CFormLabel
              htmlFor="exampleFormControlTextarea1"
              style={{ color: "gray" }}
            >
              Password
            </CFormLabel>
          </CFormFloating>

          <LoginButtonContainer>
            <LoginButton onClick={handleLoginClick}>
              Login
            </LoginButton>
          </LoginButtonContainer>
        </FormContainer>
      </AdminLoginDialog>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
width: 100%;
text-align: center;
border-radius: 0.625rem;
}
`;

const AdminLoginTitle = styled.span`
color: #ffffff;
line-height: 63.99px;
font-family: "Rubik", sans-serif;
font-weight: 700;
text-transform: uppercase;
font-size: 2rem;
text-align: center;
`;

const AdminLoginDialog = styled.div`
  background-color: #234c4c;
  width: 30%;
  margin: 0 auto;
`;

const DialogTitle = styled.h3`
  background-color: #2b4040;
color: rgb(255, 255, 255);
text-transform: uppercase;
padding: 1rem;
font-family: "Rubik", sans-serif;
font-weight: 400;
text-align: left;
`;

const FormContainer = styled.div`
padding: 2rem;
`;

const DialogText = styled.h6`
color: rgb(255, 255, 255);
font-family: "Rubik", sans-serif;
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
font-family: Rubik;
border-radius: 0.625rem;
font-size: 1.25rem;
  min-width: 10rem;
padding: 0.5rem;
outline: none;
border: none;
cursor: pointer;
text-transform: capitalize;
`;
