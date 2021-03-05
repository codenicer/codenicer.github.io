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
        <section className={styles.services_header}>
          <img
            className={styles.services_header_img}
            src="/assets/about_us.svg"
          />
          <h1 className={styles.services_header_title}>Our</h1>
          <h5 className={styles.services_header_subtitle}>
            Home {'>'} Services {'>'}
          </h5>
        </section>
        <Footer />
      </main>
    </>
  )
}
