import React from 'react';
import styled from 'styled-components';

//Styles
const StyledDiv = styled.div`
    width: 80%;
    padding: 50px 25px;
    margin: 50px 0 0;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    border-bottom: 5px solid tomato;
    @media(max-width: 700px){
        width: 100%;
    }
    h2{
        margin-top: 0;
        text-align: center;
        font-family: 'Abril Fatface', cursive;
        text-transform: uppercase;
        font-size: 30px;
    }
    p{
        margin-bottom: 0;
    }
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    h3{
        margin: 0;
        border-bottom: 3px solid tomato;
        font-family: 'Abril Fatface', cursive;
        font-size: 25px;
    }
    &:last-of-type{
        margin-bottom: 0;
    }
`;

const StyledButton = styled.a`
    align-self: center;
    background-color: tomato;
    color: #fff;
    padding: 10px 30px;
    display: inline-block;
    text-decoration: none;
    margin-top: 25px;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid tomato;
    transition: all 0.3s;
    &:hover{
        color: tomato;
        background-color: #fff;
    }
`;

const BreedSelected = (props) => {

    const breedInfo = props.breedInfo;

    return(
        <StyledDiv>
            <h2>{breedInfo.name}</h2>
            <InfoDiv>
                <h3>Description</h3>
                <p>{breedInfo.description}</p>
            </InfoDiv>
            <InfoDiv>
                <h3>Temperament</h3>
                <p>{breedInfo.temperament}</p>
            </InfoDiv>
            <InfoDiv>
                <h3>Origin</h3>
                <p>{breedInfo.origin}</p>
            </InfoDiv>
            {breedInfo.wikipedia_url !== "" ?
                <StyledButton href={breedInfo.wikipedia_url} target="_blank" rel="noopener noreferrer">More Info</StyledButton>
            : null}
        </StyledDiv>
    );
} 

export default BreedSelected;