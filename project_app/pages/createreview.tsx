
import { useState, useEffect } 
from "react";
import Header from "../components/Header";
import styled from "styled-components";

import Footer from "../components/Footer";

import "@coreui/coreui/dist/css/coreui.min.css";

import { CFormInput, CFormFloating, CFormLabel } from "@coreui/react";


import {StyledCFormTextarea, StyledCFormInput, StyledCFormLabel, FormLayout, FormTitle, FormDialog, DialogTitle, FormContainer, DialogText, ActionButtonContainer, ActionButton, StyledCFormSelect, StyledFormLabel} from '../components/formstyled';

import {DiceRating} from '../components/Dices';


export default function Reviews() {
    const [games, setGames] = useState([]); 
    const [selectedGame, setSelectedGame] = useState(null);
    
    async function fetchGames() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`);
        const games = await response.json();
        setGames(games);

        // Name of game on load
        setSelectedGame(games[0].id);
    }
      
    useEffect(() => {
        fetchGames();
    }, []);

    function handleSelectGame(e) {
        setSelectedGame(e.target.value)
    }

    return (
        <>
            <Header height={'18rem'}/>

            <ReviewArea>
                <InputContainer>

                    <PageLabel>Create A Review</PageLabel>

                    <ReviewFormFloating>
                        <StyledCFormInput
                        type="text"
                        placeholder="Review Title"
                        id="reviewName"
                        />
                        <StyledCFormLabel
                        htmlFor="reviewName"
                        >
                            Review Title
                        </StyledCFormLabel>
                    </ReviewFormFloating>

                    <StyledCFormSelect
                      id="gameId"
                      onChange={handleSelectGame}
                    >
                        {games.length === 0 ? 'Loading games...' : games.map(game => {
                            return <option
                              key=
                              {game.id}
                              value={game.id}
                            >{game.name}</option>
                        })}


                    </StyledCFormSelect>

                </InputContainer>

                <ImageSection>
                    <h4>Upload your own images related to your Review</h4>

                    <span>Images from any website is prohibited. Please upoload your own images. Make sure it's good quality too</span>

                    <div>
                        <button>
                            Choose Images
                        </button>

                        <h6>Max of 3 images</h6>
                    </div>


                </ImageSection>
                

                <ContentSection> 
                    <h5>
                        Put your Review content here
                    </h5>

                    <div>

                    </div>

                </ContentSection>

                <LanguageSection>
                    
                    <h5>What is your Review's primary language</h5>

                    <select>
                        <option selected disabled>Language</option>
                        <option>Filipino</option>
                        <option>English</option>
                        <option>Taglish</option>
                    </select>

                </LanguageSection>

                <RatingSection>
                    <h6>Reate this boardgame by these categories from 1 - 6. 1 being the lowest, and 5 being the highest</h6>

                    <span>* Complexity: 1 being too complex or too easy, 6 being well-balanced</span>

                    <span>* Playing Time: 1 being too long or too short, 6 being well-balanced</span>

                    <DicesArea>
                        <DiceRating rating={4}/>
                    </DicesArea>
                    


                  
                  

                </RatingSection>


                
                <YtUrlArea>
                    <h5>
                        Upload a youtube link that could be your elaborate video about your review 
                    </h5>

                    <ReviewFormFloating>
                        <StyledCFormInput
                        type="text"
                        placeholder="Youtube URL (optional)"
                        id="ytUrl"
                        />
                        <StyledCFormLabel
                        htmlFor="ytUrl"
                        >
                            Youtube Url
                        </StyledCFormLabel>
                    </ReviewFormFloating>

                </YtUrlArea>
                    <ActionButtonContainer>
                        <SubmitReviewButton>
                            Submit Review
                        </SubmitReviewButton>
                    </ActionButtonContainer>

            </ReviewArea>


        <Footer />

        </>
    );
}


const ReviewArea = styled.div`
  background-color: #234c4c;
  height: fit-content;

  > div {
    padding-left: 5rem;
  }
  
`

const InputContainer = styled.div`
  padding-top: 5rem;
  width: 40rem;
`

const ReviewFormFloating = styled(CFormFloating)`
  margin-bottom: 1rem;
` 

const LanguageSection = styled.div`

  margin-top: 1rem;

  & h5 {
    color: rgb(250, 250, 235);
  }

  > select {
    width: 15rem;
    padding: 0.5rem 1rem;
    border-radius: 10px
  }
`

const ContentSection = styled.div`
  color: rgb(250, 250, 235);
  margin-top: 2rem;

  > div {
    margin-top: 1rem;
    border: 1px solid white;
    height: 5rem;
    margin-right: 5rem
  }
`

const PageLabel = styled.h1`
    display: inline-block;
    color: rgb(250, 250, 235);
    font-size: 1.5rem;
    font-family: Quicksand-Bold;
    margin: 0px 1rem 2rem 0px;
    background-color: rgb(53, 53, 53);
    padding: 1rem;
    border-radius: 0.625rem;
    cursor: pointer;
    font-weight: bold;
`

const ImageSection = styled.div`
    color: rgb(250, 250, 235);

    > div {
        display: flex;
    }

    > span {
        display: block;
        font-size: 0.8rem;
        margin-top: 1rem;
        margin-bottom: 1rem; 
    }

    & h6 {
        display: block;
        margin: auto 0;
        margin-left: 1rem
    }

    & button {
        position: relative;
        display: inline-block;
        padding: 1rem;
        border-radius: 0.625rem;
        background: rgb(250, 250, 235);
        color: black;
        cursor: pointer;
    }
`

const RatingSection = styled.div`
    margin-top: 2rem;

    color: rgb(250, 250, 235);

    & h6 {
        margin-bottom: 1.5rem; 
    }

    & span {
        display: block
    }
`

const YtUrlArea = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;

    color: white;

    & h6 {
        font-size: 1rem;
    }
    
`

const SubmitReviewButton = styled(ActionButton)`
  margin-bottom: 3rem;
`

const DiceContainer = styled.div`
  height: 52px;
  width: 64px;
  margin: 2rem 2rem;
`

const DicesArea = styled.div`
    margin-top: 2rem;
`
