import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: tomato;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    a{
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        Powered by <a href="https://docs.thecatapi.com/" target="_blank" rel="noopener noreferrer">The Cat API</a> 😸
    </StyledFooter>
)

export default Footer;