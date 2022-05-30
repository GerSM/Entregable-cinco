import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
    
    const [ pokemon, setPokemon ] = useState({})

    const { id } = useParams(); 

    useEffect(() => {
        axios.get (`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon)

    return (
        <div>
            <h1>Pokemon Details</h1>
            <p>Accediendo al personaje con id: <b>{id}</b></p>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <h2><b>Height:</b>{(pokemon.height*10)} cm</h2>
            <h2><b>Weight:</b>{(pokemon.weight/10)} kg</h2>
        </div>
    );
};

export default PokemonDetails;