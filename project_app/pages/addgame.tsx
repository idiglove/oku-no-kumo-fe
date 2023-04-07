import { useState, useContext, useEffect } from "react";
import React from 'react';
import styled from "styled-components";
import { CFormInput, CFormFloating, CFormLabel, CFormTextarea } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Swal from "sweetalert2";

import AdminLayout from '../components/AdminLayout';



export default function admin() {
    const [gameTitle, setGameTitle] = useState("");
    const [gameDesc, setGameDesc] = useState("");

    async function handleAddGame() {
/*         console.log('clicked hangle game')
        console.log({
            gameTitle: gameTitle,
            gameDesc: gameDesc
        }) */

        // post 
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: gameTitle,
                description: gameDesc
            })
        })
        
        const resBody = await response.json();

        if (!response.ok) {
            Swal.fire({
                title: resBody.heading,
                text: resBody.message,
                icon: "error",
            });
            return;
        } else {
            Swal.fire({
                title: `${gameTitle} has been added to the game list!`,
                text: resBody.message,
                icon: "success",
            });

            setGameTitle("");
            setGameDesc("");

        }


    }

  return (
    <AdminLayout>
         <LoginLayout>
            <AdminLoginTitle>Add Game</AdminLoginTitle>

            <AdminLoginDialog>
                <DialogTitle>Game Information</DialogTitle>

                <FormContainer>

                    <CFormFloating style={{ marginBottom: '1rem' }}>
                        <StyledCFormInput
                            type="email"
                            id="emailOrUsername"
                            placeholder="Game Title"
                            value={gameTitle}
                            onChange={(e) => {
                                setGameTitle(e.target.value);
                            }}
                        />
                        <StyledCFormLabel htmlFor="floatingInput">
                            Game Title
                        </StyledCFormLabel>
                    </CFormFloating>
                    <CFormFloating>
                        <StyledCFormTextarea
                            id="gameDescription"
                            placeholder="Game Description"
                            value={gameDesc}
                            onChange={(e) => {
                                setGameDesc(e.target.value);
                            }}
                        />
                        <StyledCFormLabel
                            htmlFor="exampleFormControlTextarea1"
                        >
                            Game Description
                        </StyledCFormLabel>
                    </CFormFloating>

                    <LoginButtonContainer>
                        <LoginButton 
                            onClick={handleAddGame}
                        >
                            Add Game
                        </LoginButton>
                    </LoginButtonContainer>
                </FormContainer>
            </AdminLoginDialog>
        </LoginLayout>
    </AdminLayout>
  )
}

const StyledCFormTextarea = styled(CFormTextarea)`
  background-color: #2B2B2B;
  color: #FFFFFF;
  height: 20rem !important;

  &:focus {
    background-color: #2B2B2B;
    color: #FFFFFF;
  }
`

const StyledCFormInput = styled(CFormInput)`
  background-color: #2B2B2B;
  color: #FFFFFF;

  &:focus {
    background-color: #2B2B2B;
    color: #FFFFFF;
  }
`

const StyledCFormLabel = styled(CFormLabel)`
  color: gray
`

const LoginLayout = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;
  margin-top: 10rem;
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
  width: 70%;
  margin: 0 auto;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    width: 90%;
  }
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
justify-content: left;
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
