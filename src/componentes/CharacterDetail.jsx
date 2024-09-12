import {useEffect, useState} from 'react'
import { getPokemon } from '../servicios/pokeService';
import { Typography } from '@mui/material';

function CharacterDetail({characterId}) {
    const [character, setCharacter] = useState(null)

    console.log(characterId)

    const apiURL = 'https://rickandmortyapi.com/api/character';
    
    useEffect(() => {
        async function fetchData() {
            let response = await getPokemon({url: apiURL + "/" + characterId});
            setCharacter(response);
        }
        fetchData();
    }, [characterId])
    

    return (
        <div>
            {
                character && (
                    <div>
                        <Typography variant="h4">{character.name}</Typography>
                        <img src={character.image} alt={character.name} />
                        <Typography variant="body1">Status: {character.status}</Typography>
                        <Typography variant="body1">Species: {character.species}</Typography>
                        <Typography variant="body1">Gender: {character.gender}</Typography>
                        <Typography variant="body1">Origin: {character.origin.name}</Typography>
                    </div>
                )
            }
        </div>
    )
}


export {
    CharacterDetail
}