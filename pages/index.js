import Head from 'next/head'
import styles from '../styles/home.module.scss'
import MobileNavbar from '../components/mobile-navbar'
import CarouselSection from '../components/carousel-section'
import IntroductionSection from '../components/introductio-section'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { isoServiceList } from '../settings/iso-service-list'
import Link from 'next/link'

import ScrollAnimation from 'react-animate-on-scroll'
import Scroller from '../components/scroller'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA</title>
      </Head>
      <header className={styles.nav_container}>
        <Navbar />
        <MobileNavbar />
      </header>
      <main className={styles.container}>
        <CarouselSection />
        <div className={styles.intro_contaner_margin}>
          <IntroductionSection />
        </div>
        <ScrollAnimation animateOnce animateIn="ani-viewport">
          <div
            style={{
              overflowX: 'auto',
              width: 'calc(100vw - 1rem)',
            }}
          >
            <section className={styles.iso_section}>
              <ul className={styles.iso_list}>
                {Object.values(isoServiceList).map((content, i) => {
                  return (
                    <li key={i} className={styles.iso_container}>
                      <h1 className={styles.iso_title}>{content.title}</h1>
                      <h2 className={styles.iso_sub_title}>
                        {content.headline[0].headlineText.slice(0, 100) + '...'}
                      </h2>
                      <Link href={`/iso/${content.slug}`}>
                        <button className={styles.iso_link}>Read More</button>
                      </Link>

                      <img
                        className={styles.iso_img}
                        src={`/uploads/${content.imgSrc}`}
                      ></img>
                    </li>
                  )
                })}
              </ul>
            </section>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="ani-viewport">
          <Footer />
        </ScrollAnimation>

        {/* <Scroller /> */}
      </main>
    </>
  )
}
