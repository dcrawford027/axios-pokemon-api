import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
      .then(response => setAllPokemon(response.data.results))
      .catch(err => console.log(err))
  }, []);

  const showList = () => {
    setFetched(true);
    console.log(allPokemon);
  }

  return (
    <div className="App container">
      <button className="btn btn-dark" onClick={showList}>Fetch Pokemon</button>
      {fetched ? <PokemonList allPokemon={allPokemon}/> : ''}
    </div>
  );
}

export default App;
