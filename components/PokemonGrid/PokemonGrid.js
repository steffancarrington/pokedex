import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PokemonGrid.module.scss';

const PokemonGrid = ({pokemonData}) => {
    return (
        <ul className={styles.pokeGrid}>
            { pokemonData.map((pokemon, index) => (
                <li className={styles.pokeGrid__item} key={index}>
                    <Link href={`/pokemon?id=${index + 1}`}>
                        <a className={styles.pokeGrid__link}>
                            <Image
                                className={styles.pokeGrid__image}
                                src={pokemon.pokemonImage} 
                                alt={pokemon.name} 
                                width={130}
                                height={130}
                            />
                            <div className={styles.pokeGrid__inner}>
                                <h3 className={styles.pokeGrid__title}>{pokemon.name}</h3>
                                <span className={styles.pokeGrid__number}>#{index + 1}</span>
                            </div>

                            {pokemon.pokemonType.map((type, index) => (
                                <img 
                                    className={styles.pokeGrid__type}
                                    key={index}
                                    src={`/images/types/${type.type.name}.svg`}
                                    alt={`${type.type.name} Icon`}
                                    width={30}
                                    height={30}
                                    loading="lazy"
                                />
                            ))}
                        </a>
                    </Link>
                </li>
            ))}
            </ul>
    )
};

export default PokemonGrid;
