
import { useState, useEffect } 
from "react";
import Header from "../components/Header";
import styled from "styled-components";

import Footer from "../components/Footer";

import "@coreui/coreui/dist/css/coreui.min.css";

import { CFormInput, CFormFloating, CFormLabel } from "@coreui/react";


import {StyledCFormTextarea, StyledCFormInput, StyledCFormLabel, FormLayout, FormTitle, FormDialog, DialogTitle, FormContainer, DialogText, ActionButtonContainer, ActionButton, StyledCFormSelect, StyledFormLabel} from '../components/formstyled';

import {DiceRating, Dice} from '../components/Dices';


export default function Reviews() {
    const [games, setGames] = useState([]); 
    const [reviewOrStrat, setReviewOrStrat] = useState('Review');

    const [selectedGame, setSelectedGame] = useState(null);

    const [reviewValues, setReviewValues] = useState({
        title: '',
        content: '',
        language: '',
        url: '',
    });

    const [stratValues, setStratValues] = useState({
        title: '',
        content: '',
        language: '',
        url: '',
    });

    const [activeValues, setActiveValues] = useState({
        title: '',
        content: '',
        language: '',
        url: '',
    });

    const [replayability, setRepleyability] = useState(1);
    const [complexity, setComplexity] = useState(1);
    const [aesthetics, setAesthetics] = useState(1);
    const [valueForMoney, setValueForMoney] = useState(1);
    const [playTime, setPlayTime] = useState(1);
    const [componentsQuality, setComponentsQuality] = useState(1);

    const [averageRating, setAverageRating] = useState(1)
    
    async function fetchGames() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`);
        const games = await response.json();
        setGames(games);

        // Name of game on load
        setSelectedGame(games[0].id);
        setReviewValues((prevState) => ({
            ...prevState,
            game: games[0].id
          }));
        setStratValues((prevState) => ({
            ...prevState,
            game: games[0].id
          }));
    }
      
    useEffect(() => {
        fetchGames();
    }, []);

    function handleInputChange(e) {
        const value = e.target.value;
        const id = e.target.id;
        if (reviewOrStrat === 'Review') {
            setReviewValues((prevState) => ({
                ...prevState,
                [id]: value
            }));
            setActiveValues((prevState) => ({
                ...prevState,
                [id]: value
            }));
        } else {
            setStratValues((prevState) => ({
                ...prevState,
                [id]: value
            }));
            setActiveValues((prevState) => ({
                ...prevState,
                [id]: value
            }));
        }
    }

    function computeAverage(numbers) {
        if (numbers.length === 0) {
          return 0; // Return 0 for an empty array or handle it as per your requirements
        }
      
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        return parseFloat(average.toFixed(1));
      }

    useEffect(() => {

        setAverageRating(computeAverage([replayability, complexity, aesthetics, valueForMoney, playTime, componentsQuality]))

    }, [replayability, complexity, aesthetics, valueForMoney, playTime, componentsQuality])




    function handleSelectGame(e) {
        setSelectedGame(e.target.value)
    }

    return (
        <>
            <Header height={'18rem'} />

            <ReviewArea>
                <InputContainer>

                    <PageLabel isActive={reviewOrStrat === 'Review'} onClick={() => {
                        setReviewOrStrat('Review')
                        setActiveValues(reviewValues);
                    }}>Create A Review</PageLabel>

                    <PageLabel isActive={reviewOrStrat === 'Strategy'} onClick={() => {
                        setReviewOrStrat('Strategy')
                        setActiveValues(stratValues);
                    }}>Create A Strategy</PageLabel>

                    <ReviewFormFloating>
                        <StyledCFormInput
                        type="text"
                        placeholder="Review Title"
                        id="title"
                        onChange={handleInputChange}
                        value={activeValues.title}
                        />
                        <StyledCFormLabel
                        htmlFor="title"
                        >
                            {reviewOrStrat} Title
                        </StyledCFormLabel>
                    </ReviewFormFloating>

                    <StyledCFormSelect
                      id="game"
                      onChange={handleInputChange}
                      value={activeValues.game}
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
                    <h4>Upload your own images related to your {reviewOrStrat}</h4>

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
                        Put your {reviewOrStrat} content here
                    </h5>

                    <StyledCFormTextarea                       onChange={handleInputChange}
                      value={activeValues.content}
                      id="content"
                    />


                </ContentSection>

                <LanguageSection>
                    
                    <h5>What is your {reviewOrStrat}'s primary language</h5>

                    <select onChange={handleInputChange}
                      value={activeValues.language}
                      id="language">
                        <option selected disabled value="">Language</option>
                        <option value="Filipino">Filipino</option>
                        <option value="English">English</option>
                        <option value="Taglish">Taglish</option>
                    </select>

                </LanguageSection>

                {(reviewOrStrat === 'Review') ?
                <RatingSection>
                    <h6>Reate this boardgame by these categories from 1 - 6. 1 being the lowest, and 5 being the highest</h6>

                    <span>* Complexity: 1 being too complex or too easy, 6 being well-balanced</span>

                    <span>* Playing Time: 1 being too long or too short, 6 being well-balanced</span>

                    <DicesArea>
                        <RatingRow>
                            <DiceContainer>
                                <Dice value={Math.floor(averageRating)} />
                            
                            </DiceContainer>

                            <div>
                            <h2>{averageRating} / 6</h2>
                            </div>


                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Replayability</h1>
                            </div>
                                
                            <DiceRating
                              rating={replayability}
                              setRating={setRepleyability}
                            />
                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Complexity</h1>
                            </div>
                                
                            <DiceRating
                              rating={complexity}
                              setRating={setComplexity}
                            />
                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Aesthetics</h1>
                            </div>
                                
                            <DiceRating
                              rating={aesthetics}
                              setRating={setAesthetics}
                            />
                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Value for Money</h1>
                            </div>
                                
                           <DiceRating
                              rating={valueForMoney}
                              setRating={setValueForMoney}
                            />
                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Play Time</h1>
                            </div>
                                
                            <DiceRating
                              rating={playTime}
                              setRating={setPlayTime}
                            />
                        </RatingRow>

                        <RatingRow>
                            <div>
                                <h1>Components Quality</h1>
                            </div>
                                
                            <DiceRating
                              rating={componentsQuality}
                              setRating={setComponentsQuality}
                            />
                        </RatingRow>

                    </DicesArea>
                    


                  
                  

                </RatingSection>
                : ''}


                
                <YtUrlArea>
                    <h5>
                        Upload a youtube link that could be your elaborate video about your {reviewOrStrat} 
                    </h5>

                    <ReviewFormFloating>
                        <StyledCFormInput
                        type="text"
                        placeholder="Youtube URL (optional)"
                        id="url"
                        onChange={handleInputChange}
                        value={activeValues.url}
                        />
                        <StyledCFormLabel
                        htmlFor="url"
                        >
                            Youtube URL (optional)
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
  margin-right: 5rem;

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
    padding: 1rem;
    border-radius: 0.625rem;
    cursor: pointer;
    font-weight: bold;
    background-color: ${props => (props.isActive ? 'rgb(53, 53, 53)' : 'transparent')};
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
    width: 40rem;

    color: white;

    & h6 {
        font-size: 1rem;
    }
    
`

const SubmitReviewButton = styled(ActionButton)`
  margin-bottom: 3rem;
`

const DicesArea = styled.div`
    margin-top: 2rem;

    & h1 {
        display: block;
        margin: auto 0;
        font-size: 1rem;
        width: 15rem;
     }  


`

const RatingRow = styled.div`
  display: flex;

  & h2 {
    margin: auto 0;
  }

  > div {
    display: flex;
  }
`

const DiceContainer = styled.div`
  height: 52px;
  width: 64px;
  margin: 2rem 0.5rem;
  display: inline-block;
`;

