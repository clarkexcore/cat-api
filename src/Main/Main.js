import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

//Components
import ApiLoading from './layouts/ApiLoading';
import Welcome from './layouts/Welcome';
import BreedSelected from './layouts/BreedSelected';
import Selector from './layouts/Selector';
import CatsImgs from './layouts/CatsImgs';

//Cat API Key
const catApiHeader = {'x-api-key' : process.env.REACT_APP_CATAPI};

//Styles
const StyledMain = styled.main`
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 500px){
        padding: 50px 0;
    }
`;


const Main = () => {

    //Breeds State
    const [breeds, setBreeds] = useState({
        breedsLoaded: false,
        breedsList: []
    });
    const {breedsList, breedsLoaded} = breeds;
    
    //Get the Breed List from the API
    const fetchBreeds = async () => {
        let url = 'https://api.thecatapi.com/v1/breeds';
        
        const res = await Axios.get(url, catApiHeader);
        setBreeds({
            breedsLoaded: true,
            breedsList: res.data
        });
    }
    //Trigger API call on Component Load
    useEffect(() => {
        fetchBreeds();
    }, []);


    //Breed Select State & Breed Images State
    const [breedSelect, setBreedSelect] = useState({
        breedSelected: 'None',
        breedInfo: {}
    });
    const [breedImgs, setBreedImgs] = useState({
        img: [],
        imgLoaded: false
    })
    const {img, imgLoaded} = breedImgs;
    const { breedSelected, breedInfo } = breedSelect;
    
    //On Select Trigger
    const handleSelect = (e) => {
        //Filter out Breed Info into new const
        const newBreedInfo = breedsList.filter(breed => breed.id === e.target.value);
        //Set Selected Breed with Corresponding Breed info
        setBreedSelect({
            breedSelected: e.target.value,
            breedInfo: newBreedInfo[0]
        });
        
    }

    //Triggers new API call for images of selected breed info on state change
    useEffect(() => {
        if(breedSelected !== 'None'){;
            fetchCats(breedSelected);
        } else {
            //Set breedImgs state to default
            setBreedImgs({
                img: [],
                imgLoaded: false
            });
        }
    }, [breedSelected]);

    //API call for Cat Images
    const fetchCats = async (breedId) => {
        let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=20`;

        const res = await Axios.get(url, catApiHeader);

        setBreedImgs({
            img: res.data,
            imgLoaded: true
        })
        
    }


    return(
        <StyledMain>
            {breedsLoaded ?
                breedSelected === "None" ?
                    <Fragment>
                        <Welcome />
                        <Selector
                            breedsList={breedsList}
                            breedSelected={breedSelected}
                            handleSelect={handleSelect}
                        />
                    </Fragment>
                :
                    <Fragment>
                        <Selector
                            breedsList={breedsList}
                            breedSelected={breedSelected}
                            handleSelect={handleSelect}
                        />
                        <BreedSelected 
                            breedInfo={breedInfo}
                        />
                    </Fragment>
            :
                <ApiLoading />
            }
            {imgLoaded ? 
                <CatsImgs
                    catImgs={img}
                />
            : null}
        </StyledMain>
    );
}

export default Main;

