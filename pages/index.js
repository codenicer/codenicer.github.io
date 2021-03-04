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
        <section className={styles.introduction_cont}>
          <div className={styles.intoduction_who_we_are}>
            <h1 className={styles.who_we_are__heading}>Who We Are</h1>
            <p className={styles.who_we_are__information}>
              Dolore quis sit ad ex eu veniam culpa occaecat cupidatat
              exercitation voluptate. Deserunt elit et minim magna pariatur quis
              exercitation amet consectetur excepteur pariatur.
            </p>
            <button className={styles.who_we_are__cta}>Contact Us</button>
          </div>

          <div className={styles.intoduction_what_we_do}>
            <svg
              className={styles.who_we_do__icon}
              width="46.259"
              height="42.682"
              viewBox="0 0 46.259 42.682"
            >
              <path
                id="Icon_awesome-paper-plane"
                data-name="Icon awesome-paper-plane"
                d="M43.011.265,1.13,22.552a1.939,1.939,0,0,0,.2,3.6l9.605,3.717,25.96-21.1c.5-.408,1.2.217.777.692L15.9,33.92V40.63a2.2,2.2,0,0,0,3.84,1.317L25.482,35.5,36.74,39.854a2.2,2.2,0,0,0,2.982-1.517L46.228,2.332A2.143,2.143,0,0,0,43.011.265Z"
                transform="translate(-0.001 0.004)"
                fill="#fff"
              />
            </svg>

            <h1 className={styles.who_we_do__heading}>What We Do</h1>
            <p className={styles.who_we_do__information}>
              Dolore quis sit ad ex eu veniam culpa occaecat cupidatat
              exercitation voluptate. Deserunt elit et minim magna pariatur quis
              exercitation amet consectetur excepteur pariatur.
            </p>
          </div>

          <div className={styles.intoduction_services}>
            <svg
              className={styles.services__icon}
              width="55"
              height="45"
              viewBox="0 0 49.566 40.435"
            >
              <path
                id="Icon_awesome-hands-helping"
                data-name="Icon awesome-hands-helping"
                d="M37.795,15.164H26.023v4.423a5.577,5.577,0,1,1-11.152,0v-9.6l-5.026,3.08a5.065,5.065,0,0,0-2.409,4.328v3.736l-6.2,3.649a2.549,2.549,0,0,0-.906,3.451l6.2,10.947a2.453,2.453,0,0,0,3.384.924l8.008-4.715H28.5a5.011,5.011,0,0,0,4.957-5.055H34.7A2.5,2.5,0,0,0,37.175,27.8V22.746h.62a1.873,1.873,0,0,0,1.859-1.9V17.06A1.873,1.873,0,0,0,37.795,15.164ZM49.234,12.21l-6.2-10.947A2.453,2.453,0,0,0,39.653.339L31.645,5.055H23.73a4.922,4.922,0,0,0-2.625.766L18.51,7.471a2.522,2.522,0,0,0-1.162,2.14v9.975a3.1,3.1,0,1,0,6.2,0v-6.95h14.25a4.383,4.383,0,0,1,4.337,4.423V19.31l6.2-3.649a2.558,2.558,0,0,0,.906-3.451Z"
                transform="translate(0.002 -0.001)"
                fill="#fff"
              />
            </svg>

            <h1 className={styles.services__heading}>Our Services</h1>
            <p className={styles.services__information}>
              Dolore quis sit ad ex eu veniam culpa occaecat cupidatat
              exercitation voluptate. Deserunt elit et minim magna pariatur quis
              exercitation amet consectetur excepteur pariatur.
            </p>
          </div>
        </section>

        <section className={styles.iso_section}>
          <ul className={styles.iso_list}>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
            <li className={styles.iso_container}>
              <h1 className={styles.iso_title}>ISO 41231231</h1>
              <h2 className={styles.iso_sub_title}>
                Lorem id ut tempor ullamco labore pariatur pariatur sint.
              </h2>
              <a className={styles.iso_link}>See Details</a>
              <img className={styles.iso_img} src="/isoiso.webp"></img>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
