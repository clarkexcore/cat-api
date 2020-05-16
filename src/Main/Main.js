import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';

//Components

//Cat API Key
const catApiHeader = {'x-api-key' : process.env.REACT_APP_CATAPI};

const Main = () => {

    //Breeds State
    const [breeds, setBreeds] = useState({
        breedsLoaded: false,
        breedsList: []
    });

    const {breedsList, breedsLoaded} = breeds;
    
    const fetchBreeds = async () => {
        let url = 'https://api.thecatapi.com/v1/breeds';
        
        const res = await Axios.get(url, catApiHeader);

        console.log(res.data);
        setBreeds({
            breedsLoaded: true,
            breedsList: res.data
        });
    }

    useEffect(() => {
        fetchBreeds();
    }, []);


    //Breed Select State
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
    
    const handleSelect = (e) => {
        console.log(e.target.value)
        const newBreedInfo = breedsList.filter(breed => breed.id === e.target.value);
        setBreedSelect({
            breedSelected: e.target.value,
            breedInfo: newBreedInfo[0]
        });
        
    }

    useEffect(() => {
        if(breedSelected !== 'None'){;
            fetchCats(breedSelected);
        }
    }, [breedSelected]);


    const fetchCats = async (breedId) => {
        let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=20`;

        const res = await Axios.get(url, catApiHeader);

        console.log(res.data);
        setBreedImgs({
            img: res.data,
            imgLoaded: true
        })
        
    }


    return(
        <Fragment>
            {breedsLoaded ?
                <div>
                    <select
                        value={breedSelected}
                        onChange={e => handleSelect(e)}
                    >
                        <option value={null}>--Please Select Breed--</option>
                        {breedsList.map(breed=> (
                            <option value={breed.id} key={breed.id}>{breed.name}</option>
                        ))};
                    </select>

                </div>
            : null}
            {imgLoaded ? 
                <div>
                    {img.map(img => (
                        <img src={img.url} alt={img.breeds[0].name} key={img.id} />
                    ))}
                </div>
            : null}
        </Fragment>
    );
}

export default Main;

