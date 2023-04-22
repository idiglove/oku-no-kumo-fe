import { useState, useContext, useEffect } from "react";
import React from 'react';
import { CFormFloating } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Swal from "sweetalert2";

import AdminLayout from '../components/AdminLayout';

import {StyledCFormTextarea, StyledCFormInput, StyledCFormLabel, FormLayout, FormTitle, FormDialog, DialogTitle, FormContainer, DialogText, ActionButtonContainer, ActionButton} from '../components/formstyled';



export default function admin() {
    const [gameTitle, setGameTitle] = useState("");
    const [gameDesc, setGameDesc] = useState("");

    async function handleAddGame() {
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
         <FormLayout>
            <FormTitle>Add Game</FormTitle>

            <FormDialog>
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

                    <ActionButtonContainer>
                        <ActionButton 
                            onClick={handleAddGame}
                        >
                            Add Game
                        </ActionButton>
                    </ActionButtonContainer>
                </FormContainer>
            </FormDialog>
        </FormLayout>
    </AdminLayout>
  )
}



