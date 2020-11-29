export async function getPokemon(pokemonCount) {
    const pokemonUrls = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`);
    const {results} = await pokemonUrls.json();
    
    const pokemonData = await Promise.all( 
        results.map(async (pokemon, index) => {
            const pokemonIndex = ('00' + (index + 1)).slice(-3);
            const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonIndex}.png`;
            
            const pokemonTypes = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
            const pokemonTypeData = await pokemonTypes.json();
            const pokemonType = pokemonTypeData.types;

            return {
                ...pokemon,
                pokemonImage,
                pokemonType
            }
    }));

    return pokemonData;
}