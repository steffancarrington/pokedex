export async function getPokemonData(id) {
    // Fetch Pokemon Based on ID
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();

    // Fetch Pokemon Description based on ID
    const pokeDesc = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const pokeDescData = await pokeDesc.json();
    pokemon.description = pokeDescData.flavor_text_entries[4].flavor_text;

    // Retrieve Pokemon Image from Pokemon.com (Better Images from there)
    // Set Pokemon image property to be the better image.
    const pokemonId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
}