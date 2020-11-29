import React from 'react';
import Link from 'next/link';
import styles from './Pagination.module.scss';

const Pagination = ({pokemonId}) => {
    return (
        <nav className={styles.pagination} aria-label="Pagination Navigation">
            {/* View Previous Pokemon - Conditionally render if not first pokemon in Pokedex being displayed */}
            { pokemonId > 1 && 
            <Link href={`/pokemon?id=${pokemonId - 1}`}>
                <a className={styles.pagination__prev}><span>Previous Pokemon</span></a>
            </Link>
            }

            {/* View Next Pokemon - Conditionally render if not last pokemon in Pokedex being displayed */}
            { pokemonId < 893 &&
            <Link href={`/pokemon?id=${pokemonId + 1}`}>
                <a className={styles.pagination__next}><span>Next Pokemon</span></a>
            </Link>
            }
        </nav>
    );
};

export default Pagination;
