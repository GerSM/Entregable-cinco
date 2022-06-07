import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import '../styles/pokemon.css'

const Pokemon = () => {

    const userName = useSelector((state) => state.userName);

    const [ pokemonSearch, setPokemonSearch ] = useState("")
    const [ pokemons, setPokemons ] = useState([])
    const [ locations, setLocations ] =useState([])

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=6`)
        .then((res) => setPokemons(res.data.results));
        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setLocations(res.data.results))
    }, []);

    const search = () => {
        //console.log(pokemonSearch)
        navigate(`/pokemon/${pokemonSearch}`)
    }

    const filterPokemons = e => {
        axios.get(e.target.value)
            .then((res) => setPokemons(res.data.pokemon))
    }
    //console.log(pokemons)

    return (
        <div>
            <div className="container-form">
                <div className='form-pokemon-search'>
                    <h1 className='welcome-usr'>Bienvenido {userName}!!</h1>
                    <div className="search-box"> 
                        <select 
                            className="dropdown-toggle" 
                            onChange={filterPokemons}>
                            {
                                locations.map(location => (
                                    <option value={location.url} key={location.url}>{location.name}</option>
                                ))
                            }
                        </select>
                        <input
                            className='pokemon-search' 
                            type="text" 
                            value={pokemonSearch} 
                            onChange={(e) => setPokemonSearch(e.target.value)} 
                            placeholder="Buscar pokemon..."/>
                        
                        <button className='btn-search' onClick={search}>Buscar</button> 
                    </div>  
                   </div>          
                </div>
            <div className="d-cards">
                {
                    pokemons.map((pokemon) => (
                        <PokemonCard 
                            pokemonNameUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} 
                            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}/>
                    ))
                }
                </div>
        </div>
    );
};

export default Pokemon;