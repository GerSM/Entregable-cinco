import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonNameUrl}) => {

    const [pokemon, setPokemon] =useState({})

    const navigate = useNavigate();
    //console.log(pokemonNameUrl)

    useEffect (() => {
        axios.get(pokemonNameUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonNameUrl, setPokemon])
    

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
            <div className='card h-100' 
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
                <div className="card-body">
                    <h2>{pokemon.name}</h2>
                    <h3>{pokemon.types?.[0]?.type.name}/
                    {pokemon.types?.[1]?.type.name}</h3>
                    <img src={pokemon.sprites?.other["official-artwork"].front_default} className=" w-100" />
                        
                    <h3>{pokemon.base_experience} <b>Exp</b></h3>
                    <ul>
                        <li><h4><b>HP: </b> {pokemon.stats?.[0].base_stat}</h4></li>
                        <li><h4><b>Attack:</b>{pokemon.stats?.[1].base_stat}</h4></li>
                        <li><h4><b>Special:</b>{pokemon.stats?.[3].base_stat}</h4></li>
                        <li><h4><b>Defense: </b>{pokemon.stats?.[2].base_stat}</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;