import styled from "styled-components";
import {useEffect, useState} from 'react';
import {
    Dice0,
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6
} from './DiceSVGs';


export function DiceRating({rating, setRating}) {

    const [viewRating, setViewRating] = useState(0);

    useEffect(() => {
        setViewRating(rating);
    }, [])

    const ratings = [1, 2, 3, 4, 5, 6];

    const handleDiceHover = (diceValue) => {
        setViewRating(diceValue);
      };

    const handleDiceLeave = () => {
        setViewRating(rating);
    }
    
    return (
        <>
            {ratings.map(dice => {
                if (viewRating >=dice) {
                    return ( 
                        <DiceContainer 
                          key={dice} 
                          onMouseEnter={() => handleDiceHover(dice)} 
                          onMouseLeave={handleDiceLeave}
                          onClick={() => {setRating(dice)}}
                        >
                            <Dice value={dice}  />
                        </DiceContainer>
                    )
                } else {
                    return ( 
                        <DiceContainer 
                          key={dice} 
                          onMouseEnter={() => handleDiceHover(dice)} 
                          onMouseLeave={handleDiceLeave}
                          onClick={() => {setRating(dice)}}
                        >
                            <Dice value={0}  />
                        </DiceContainer>
                    )
                }
            })}
        </>
    );


}

const DiceContainer = styled.div`
  height: 52px;
  width: 64px;
  margin: 2rem 0.5rem;
  display: inline-block;
`;





 
export function Dice({value}) {
    switch (value) {
        case 0:
            return <Dice0 height={'52px'} width={'64px'}/>
        case 1:
            return <Dice0 height={'52px'} width={'64px'}/>
        case 2:
            return <Dice0 height={'52px'} width={'64px'}/>
        case 3:
            return <Dice0 height={'52px'} width={'64px'}/>
        case 4:
            return <Dice0 height={'52px'} width={'64px'}/>
        case 5: 
            return <Dice0 height={'52px'} width={'64px'}/>
        case 6:
            return <Dice0 height={'52px'} width={'64px'}/>
    }
}


