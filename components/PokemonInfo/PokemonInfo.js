import React from 'react';
import Image from 'next/image';
import Pagination from '../Pagination/Pagination';
import styles from './PokemonInfo.module.scss';

const PokemonInfo = ({pokemon}) => {
    const pokemonId = ('00' + pokemon.id).slice(-3);

    return (
        <article className={styles.pokemon}>
            <span 
                className={styles.pokemon__bg} 
                data-type={pokemon.types[0].type.name}
                role="presentation"
                aria-hidden="true"
            >
            </span>

            <div className={styles.pokemon__image__contain}>
                <Image
                    key={pokemon.id} 
                    src={pokemon.image} 
                    alt={pokemon.name}
                    width={200}
                    height={200}
                    quality={100}
                />
            </div>

            <h1 className={styles.pokemon__title}>{pokemon.name}</h1>
            <p className={styles.pokemon__number}>#{pokemonId}</p>

            <section className={styles.pokemon__types}>
                <h2 className="hidden-v">Pokemon Types</h2>
                
                { pokemon.types.map((type, index) => (
                <p className={styles.pokemon__type} 
                   data-type={type.type.name} 
                   key={index}
                >
                  {type.type.name}
                </p>
                ))}
            </section>

            <section className={styles.pokemon__info}>
                <h2>Description</h2>
                <p className={styles.pokemon__description}>{pokemon.description}</p>

                <section className={styles.pokemon__height}>
                    <h3>Height</h3>
                    <p>{(pokemon.height * 10)}cm</p>
                </section>

                <section className={styles.pokemon__width}>
                    <h3>Weight</h3>
                    <p>{pokemon.weight}lbs</p>
                </section>
            </section>

            <section className={styles.pokemon__stats}>
                <h2>Statistics</h2>

                { pokemon.stats.map((stat, index) => (
                <div key={index} className={styles.pokemon__stat}>
                    <p className={styles.pokemon__statName}>{stat.stat.name}</p> 
                    <progress className={styles.pokemon__statBar} value={Math.ceil(stat.base_stat / 2)} max="100"></progress>
                    <p className={styles.pokemon__statValue}>{Math.ceil(stat.base_stat / 2)}/100</p>
                </div>  
                ))}
            </section>

            { pokemon.game_indices.length > 0 && (
            <section className={styles.pokemon__games}>
                <h2>Games</h2>

                { pokemon.game_indices.map((game, index) => (
                    <span 
                        className={styles.pokemon__game} 
                        key={index}
                        data-game-colour={game.version.name}
                    >{game.version.name.replace('-', ' ')}</span>
                ))}
            </section>
            )}

            <Pagination pokemonId={pokemon.id} />
        </article>        
    );
};

export default PokemonInfo;