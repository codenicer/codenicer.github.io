import Head from 'next/head'
import styles from '../../styles/services.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import Footer from '../../components/footer'
export default function Services() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA | Services</title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className={styles.container}>
        <Footer />
      </main>
    </>
  )
}
