import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const catApiHeader = {'x-api-key' : process.env.REACT_APP_CATAPI};

function App() {


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
            console.log(breedInfo);
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
        <div className="app">
            {breedsLoaded ?
                <div>
                    <p>loaded</p>
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
        </div>
    )
}

export default App;
