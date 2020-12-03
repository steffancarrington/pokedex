import Layout from '../components/Layout/Layout';
import NotFound from '../components/404/404';

const pageHead = {
    title: '404 | This page could not be found - NextJS Pokedex',
    description: 'A Pokedex App created with NextJS'
}

export default function Custom404() {
    return (
        <Layout 
            title={pageHead.title} 
            description={pageHead.description}
        > 
            <NotFound />
        </Layout>
    )
}
