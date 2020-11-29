import { getPokemon } from '../lib/getPokemon';
import Layout from '../components/Layout/Layout';
import PokemonGrid from '../components/PokemonGrid/PokemonGrid';

const pageHead = {
    title: 'NextJS Pokedex',
    description: 'A Pokedex App created with NextJS'
}

export default function Home({ pokemonData }) {
    return (
        <Layout 
            title={pageHead.title} 
            description={pageHead.description}
            home
        >
            <PokemonGrid pokemonData={pokemonData} />
        </Layout>
    )
}

// Retrieve frist 150 Pokemon during Build Time
export async function getStaticProps() {
    try {
        const pokemonData = await getPokemon(151);

        return {
            props: {
                pokemonData
            }
        }
    } catch(error) {
        console.error(error);
    }
}
