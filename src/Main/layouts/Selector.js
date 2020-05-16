import React from 'react';
import styled from 'styled-components';

//Styles
const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    .arrowDown{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
    }
    &:hover .arrowDown{
        color: tomato;
    }
    @media(max-width: 500px){
        padding: 0 15px;
        .arrowDown{
            right: 25px;
        }
    }
`;
const StyledSelect = styled.select`
    width: 100%;
   
    height: 50px;
    font-size: 100%;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background-color: tomato;
    border: none;
    border: 1px solid tomato;
    border-bottom: 2px solid #962d22;
    color: white;
    padding: 10px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 10px;
    &:hover{
       background-color:  #fff;
       color: tomato;
       border-bottom: 2px solid tomato;
    }
`;

const Selector = (props) => {

    const { breedSelected, breedsList, handleSelect } = props;
    
    return(
        <StyledDiv>
            <StyledSelect
                value={breedSelected}
                onChange={e => handleSelect(e)}
            >
                <option value="None">--Please Select Breed--</option>
                {breedsList.map(breed=> (
                    <option value={breed.id} key={breed.id}>{breed.name}</option>
                ))};
            </StyledSelect>
            <i className="fas fa-chevron-down arrowDown"></i>
        </StyledDiv>
    );
}

export default Selector;