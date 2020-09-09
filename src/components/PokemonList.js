import React from 'react';

const PokemonList = props => {
    const {allPokemon} = props;

    return (
        <>
            { props.allPokemon.map((pokemon, index) => {
                return <div key={index}>{pokemon.name}</div>
            })}
        </>
    )
}

export default PokemonList;