import React from 'react';
import styled from 'styled-components';

//Styles
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 25px;
    & > div{
        font-size: 75px;
        margin-bottom: 25px;
    }
`;

const ApiLoading = () => (
    <StyledDiv>
        <div><i className="fas fa-sync fa-spin spinner"></i></div>
        Loading...
    </StyledDiv>
);

export default ApiLoading;