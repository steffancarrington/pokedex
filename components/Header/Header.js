import React from 'react';
import Link from 'next/link';
import SearchForm from '../Search/Search';

// Styles
import styles from './Header.module.scss';

const Header = ({home, title}) => {
    return  (
        <header className={styles.header}>
            <section className={styles.header__inner}>
                <div className={styles.pokedex__lights}>
                    <div className={styles.pokedex__light} role="presentation">
                        <span className={styles.pokedex__inner}></span>
                    </div>

                    <div className={styles.pokedex__mini} role="presentation">
                        <span className={styles.pokedex__red}></span>
                        <span className={styles.pokedex__yellow}></span>
                        <span className={styles.pokedex__green}></span>
                    </div>
                </div>
                
                { home ? (
                    <h1 className="hidden-v">{title}</h1>
                ) : (
                    <Link href={'/'}>
                        <a className="hidden-v"><p>{title}</p></a>
                    </Link>
                )}

                <SearchForm />
            </section>
        </header>
    )
};

export default Header;
