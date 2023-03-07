import Head from 'next/head'
import { FC, ReactNode } from 'react'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Curso NextJs</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>  
                {children}
            </main>
        </div>
    )
}

export default MainLayout