import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

export default function Layout({ children, home, title, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link
                    rel="preload"
                    href="/fonts/spacegrotesk-regular.woff2"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <Header home={home} title={title} />

            <main className={styles.main}>
                { children }
            </main>

            <footer className={styles.footer}>
                <p className={styles.copyright}> &copy; Copyright { new Date().getFullYear() } Owen Hughes &amp; Steffan Carrington</p>
            </footer>
        </>
    )
}