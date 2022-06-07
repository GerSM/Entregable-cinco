import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/stylesCards.css'

const PokemonCard = ({pokemonNameUrl}) => {

    const [pokemon, setPokemon] =useState({})

    const navigate = useNavigate();
    //console.log(pokemonNameUrl)

    useEffect (() => {
        axios.get(pokemonNameUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonNameUrl, setPokemon])
    

    return (
            <div className='card' 
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <div className="card-body">
                    <div className="container-img">
                        <img src={pokemon.sprites?.front_default} className="pokemon-image" />
                    </div>
                    <h2 className='name'>{pokemon.name}</h2>
                    <h3 className='types'>{pokemon.types?.[0]?.type.name}/
                    {pokemon.types?.[1]?.type.name}</h3>
                   
                    <h3 className='exp'>{pokemon.base_experience} <b>Exp</b></h3>
                    <ul className='card-stats'>
                        <li><h4><b>HP: </b> {pokemon.stats?.[0].base_stat}</h4></li>
                        <li><h4><b>Attack: </b>{pokemon.stats?.[1].base_stat}</h4></li>
                        <li><h4><b>Special: </b>{pokemon.stats?.[3].base_stat}</h4></li>
                        <li><h4><b>Defense: </b>{pokemon.stats?.[2].base_stat}</h4></li>
                    </ul>
                </div>
            </div>
    );
};

export default PokemonCard;