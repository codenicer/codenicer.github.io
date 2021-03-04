import Head from 'next/head'
import styles from '../styles/home.module.scss'
import MobileNavbar from '../components/mobile-navbar'
import CarouselIndicator from '../components/carousel-indicator'
import Carousel from 're-carousel'

import { generalSetting } from '../settings/general'
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
        <section className={styles.carousel_container}>
          <Carousel loop auto interval={8000} widgets={[CarouselIndicator]}>
            {generalSetting.carousel.map((content, i) => {
              return (
                <div
                  key={i}
                  className={styles.carousel_img}
                  style={{
                    backgroundImage: `url('${content.img}')`,
                  }}
                >
                  <div className={styles.carousel__hero_cont}>
                    <h3 className={styles.hero_cont__sub_headline}>
                      {content.subHeadline}
                    </h3>
                    <h1 className={styles.hero_cont__headline}>
                      {content.headline}
                    </h1>
                    {content.button ? (
                      <button className={styles.hero_cont__headline_cta}>
                        {content.button}
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={styles.carousel__snapper}></div>
                </div>
              )
            })}
          </Carousel>
        </section>
        <section
          style={{ backgroundColor: 'yellow' }}
          className={styles.intoduction_cont}
        >
          <div className={styles.intoduction_who_we_are}>
            <h1 className={styles.who_we_are__heading}>Who We Are</h1>
            <p className={styles.who_we_are__information}>Who We Are</p>
            <button className={styles.who_we_are__cta}>Who We Are</button>
          </div>
        </section>
      </main>
    </>
  )
}
