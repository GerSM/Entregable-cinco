import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
    
    const [ pokemon, setPokemon ] = useState({})

    const { id } = useParams(); 

    useEffect(() => {
        axios.get (`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [setPokemon])

    console.log(pokemon)

    return (
        <div>
            <div className="img-pokemon">
                <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            </div>
            <div className='principal-information'>
                <p><b># {id}</b></p>
                <h1>{pokemon.name}</h1>
                <h3><b>Height:</b>{(pokemon.height*10)} cm</h3>
                <h3><b>Weight:</b>{(pokemon.weight/10)} kg</h3>
            </div> 
            <div className="info-two">
                <div className='info-type'>
                    <h2>Tipo</h2>
                    <h3>{pokemon.types?.[0]?.type.name}</h3> 
                    <h3>{pokemon.types?.[1]?.type.name}</h3>
                </div> 
                <div className="info-abilities">
                    <h2>Habilidades</h2>
                    <h3>{pokemon.abilities?.[0]?.ability.name}</h3>
                    <h3>{pokemon.abilities?.[1]?.ability.name}</h3>
                </div>  
                <div className="stats-list">
                    <ul className='list'>
                        <li><h4><b>HP: </b> <progress id="hp" max="100" value={pokemon.stats?.[0].base_stat}/> {pokemon.stats?.[0].base_stat}%</h4></li>
                        <li><h4><b>Attack: </b><progress id="attack" max="100" value={pokemon.stats?.[1].base_stat}/> {pokemon.stats?.[1].base_stat}%</h4></li>
                        <li><h4><b>Defense: </b><progress id="defense" max="100" value={pokemon.stats?.[2].base_stat}/> {pokemon.stats?.[2].base_stat}%</h4></li>
                        <li><h4><b>Special: </b><progress id="special" max="100" value={pokemon.stats?.[3].base_stat}/> {pokemon.stats?.[3].base_stat}%</h4></li>
                        <li><h4><b>Special defense: </b><progress id="specialdefense" max="100" value={pokemon.stats?.[4].base_stat}/> {pokemon.stats?.[4].base_stat}%</h4></li>
                        <li><h4><b>Speed: </b><progress id="speed" max="100" value={pokemon.stats?.[5].base_stat}/> {pokemon.stats?.[5].base_stat}%</h4></li>
                    </ul>
                </div> 
            </div>

            
            
        </div>
    );
};

export default PokemonDetails;