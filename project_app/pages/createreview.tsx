import { useState, useContext, useEffect, useRef } from "react";
import React from 'react';
import { CFormFloating } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Swal from "sweetalert2";
import { useForm, Controller } from "react-hook-form";

import AdminLayout from '../components/AdminLayout';

import {StyledCFormTextarea, StyledCFormInput, StyledCFormLabel, FormLayout, FormTitle, FormDialog, DialogTitle, FormContainer, DialogText, ActionButtonContainer, ActionButton, StyledCFormSelect, StyledFormLabel} from '../components/formstyled';



export default function CreateReview() {
    const { register, handleSubmit, reset, formState: {isDirty, isValid, errors}} = useForm();
    const [games, setGames] = useState([]); 
    const selectedGameName = useRef(null);
    
    async function fetchGames() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`);
        const games = await response.json();
        setGames(games);

        // Name of game on load
        selectedGameName.current = games[0].name;
      }
      
      useEffect(() => {
        fetchGames();
      }, []);

    async function handleAddReview(data) {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games/${data.gameId}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: 'hello1',
                content: data.reviewDesc
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
                title: resBody.heading,
                text: `Review for ${selectedGameName.current} has been created.`,
                icon: "success",
            });

            reset({ reviewDesc: "", gameId: games[0].id });
            selectedGameName.current  = games[0].name;
        }


    }

    function onSubmitError(errors, e) {
        Swal.fire({
            title: errors.reviewDesc.message,
            icon: "error",
        });
    }

    function handleGameSelect(e) {
        console.log('asdfasd');
        const gameName = e.target.selectedOptions[0].text;
        selectedGameName.current = gameName;
    }

  return (
    <AdminLayout>
         <FormLayout>
            <FormTitle>Add Review</FormTitle>

            <FormDialog>
                <DialogTitle>Review Information</DialogTitle>

                <FormContainer>
                    
                    <StyledFormLabel>
                        Game Name
                    </StyledFormLabel>

                    <StyledCFormSelect
                      id="gameId"
                      {...register("gameId", { required: true })}
                      onChange={handleGameSelect}
                    >
                        {games.length === 0 ? 'Loading games...' : games.map(game => {
                            return <option
                              key=
                              {game.id}
                              value={game.id}
                            >{game.name}</option>
                        })}


                    </StyledCFormSelect>

                    <CFormFloating>
                        <StyledCFormTextarea
                            id="reviewDesc"
                            placeholder="Reveiew Description"
                            {...register("reviewDesc", { required: "Game review is blank!" })}                            
                        />
                        <StyledCFormLabel
                            htmlFor="exampleFormControlTextarea1"
                        >
                            Game Review
                        </StyledCFormLabel>
                    </CFormFloating>

                    <ActionButtonContainer>
                        <ActionButton 
                            onClick={handleSubmit(handleAddReview, onSubmitError)}
                        >
                            Add Review
                        </ActionButton>
                    </ActionButtonContainer>
                </FormContainer>
            </FormDialog>
        </FormLayout>
    </AdminLayout>
  )
}



