import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: tomato;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 700;
`;

const Header = () => {

    return(
        <Fragment>
            <StyledHeader>
                <h1>Cat Breeds</h1>
            </StyledHeader>
        </Fragment>
    );
}

export default Header;