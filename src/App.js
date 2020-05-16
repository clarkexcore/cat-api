import React from 'react';
import styled from 'styled-components';

//Import Components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const StyledApp = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
`;

function App() {

    return(
        <StyledApp>
            <Header />
            <Main />
            <Footer />
        </StyledApp>
    )
}

export default App;
