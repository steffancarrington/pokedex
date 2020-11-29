import React from 'react';
import Layout from '../components/Layout/layout';
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';

export default function pokemon({pokemon}) {
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const pageHead = {
        title: `${pokemonName} | Pokedex`,
        description: `${pokemonName} - ${pokemon.description}`
    }
    
    return (
        <Layout title={pageHead.title} description={pageHead.description}>
            <PokemonInfo pokemon={pokemon} />    
        </Layout>
    );
};

// Server Side Request to run on page load rather than at build
export async function getServerSideProps({query}) {
    // Get Pokemon ID here to make Fetch Request
    const id = query.id;

    try {
        // Fetch Pokemon Based on ID
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();

        // Fetch Pokemon Description based on ID
        const pokeDesc = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const pokeDescData = await pokeDesc.json();
        pokemon.description = pokeDescData.flavor_text_entries[0].flavor_text;

        // Retrieve Pokemon Image from Pokemon.com (Better Images from there)
        // Set Pokemon image property to be the better image.
        const pokemonId = ('00' + id).slice(-3);
        pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;

        // Return pokemon data in the props object. 
        return {
            props: {
                pokemon
            },
        };
    } catch(error) {
        console.error(error);
    }
}