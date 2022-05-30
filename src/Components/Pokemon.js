import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {

    const userName = useSelector((state) => state.userName);

    const [ pokemonSearch, setPokemonSearch ] = useState("")
    const [ pokemons, setPokemons ] = useState([])
    const [ locations, setLocations ] =useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
        .then((res) => setPokemons(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setLocations(res.data.results))
    }, []);

    


    const search = () => {
        console.log(pokemonSearch)
        navigate(`/pokemon/${pokemonSearch}`)
    }

    const filterPokemons = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }
    console.log(pokemons)

    return (
        <div>
            <h1>Pokemon</h1>
            <h1>Bienvenido {userName}</h1>
           
            <div className="search-box"> 
                <select 
                    className="btn btn-primary dropdown-toggle" 
                    onChange={filterPokemons}>
                    {
                        locations.map(location => (
                            <option value={location.url}>{location.name}</option>
                        ))
                    }
                </select>
                <input 
                    type="text" 
                    value={pokemonSearch} 
                    onChange={e => setPokemonSearch(e.target.value)} 
                    placeholder="buscar pokemon"/>
                
                <button className='btn btn-primary' onClick={search}>Buscar</button>            
            </div>
            <div className="d-flex flex-wrap">
                {
                    pokemons.map((pokemon) => (
                        <PokemonCard pokemonNameUrl={pokemon.url} key={pokemon.name}/>
                    ))
                } 
                </div>
        </div>
    );
};

export default Pokemon;