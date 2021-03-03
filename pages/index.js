import Head from 'next/head'
import styles from '../styles/home.module.scss'
import MobileNavbar from '../components/mobile-navbar'
export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className={styles.container}></main>
    </>
  )
}
