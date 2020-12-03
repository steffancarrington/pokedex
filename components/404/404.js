import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './404.module.scss';
 
const NotFound = () => {
    return (
        <section className={styles.notFound}>
            <h1 className={styles.notFound__heading}>404</h1>

            <img
                className={styles.notFound__image}
                src={'/images/psyduck.png'} 
                alt="A confused Psyduck Pokemon" 
                height={182} 
                width={165} 
                role="presentation"
            />

            <p className={styles.notFound__subHeading}>Psy Yi Yi!</p>
            <p className={styles.notFound__desc}>Looks like we're a bit confused and have lost something.</p>

            <Link href={'/'}>
                <a className={styles.notFound__link}>
                    <span>Return Home</span>
                    </a>
            </Link>
        </section>
    );
};

export default NotFound;
