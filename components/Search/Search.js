import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Search.module.scss';

const preventDefault = f => e => {
    e.preventDefault();
    f(e);
};

const SearchForm = ({action = '/pokemon'}) => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleParam = setValue => e => setValue(e.target.value);

    const handleSubmit = preventDefault(() => {
        if (query > 0 && query < 894) {
            router.push({
                pathname: action,
                query: { 
                    id: query 
                },
            });
          } else {
            router.push('/404');
          }
    });

    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <div className={styles.search__inner} role="search">
                <label className="search-label hidden-v" htmlFor="search">
                    Search for a Pokemon
                    <p id="error" role="alert"></p>
                </label>
                <input 
                    className={styles.search__input} 
                    id="search" 
                    name='id'
                    onChange={handleParam(setQuery)}
                    placeholder="Search by number" 
                    required 
                    type="number"
                />
                <button className={`${styles.search__submit} hidden-v`} type="submit">
                    <img src={'/images/icons/search.svg'} alt="" role="presentation" height={20} width={20} />
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
