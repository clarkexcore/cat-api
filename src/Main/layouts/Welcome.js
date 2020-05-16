import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    h2{
        font-family: 'Abril Fatface', cursive;
        font-size: 36px;
        margin: 15px;
    }
    p{
        margin-bottom: 35px;
    }
    @media(max-width: 500px){
        padding: 0 15px;
    }
`;

const Welcome = () => (
    <StyledDiv>
        <h2>Select Cat Breed</h2>
        <p>Select from the list of cat breeds in order to see some sweet pictures of that cat breed, and information on that breed!</p>
    </StyledDiv>
);

export default Welcome;