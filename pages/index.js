import Head from 'next/head'
import styles from '../styles/home.module.scss'
import MobileNavbar from '../components/mobile-navbar'
import CarouselSection from '../components/carousel-section'
import IntroductionSection from '../components/introductio-section'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA</title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className={styles.container}>
        <CarouselSection />
        <IntroductionSection />
        <section className={styles.iso_section}>
          <ul className={styles.iso_list}>
            {Array(6)
              .fill('wew')
              .map((c, i) => {
                return (
                  <li key={i} className={styles.iso_container}>
                    <h1 className={styles.iso_title}>ISO 41231231</h1>
                    <h2 className={styles.iso_sub_title}>
                      Lorem id ut tempor ullamco labore pariatur pariatur sint.
                    </h2>
                    <a className={styles.iso_link}>See Details</a>
                    <img className={styles.iso_img} src="/isoiso.webp"></img>
                  </li>
                )
              })}
          </ul>
        </section>
        <Footer />
      </main>
    </>
  )
}
