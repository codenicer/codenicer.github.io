import styles from '../styles/home.module.scss'
import TrainWithUs from '../components/train-with-us'
import Link from 'next/link'
export default function IntrouctionSection() {
  return (
    <section className={styles.introduction_cont}>
      <div className={styles.intoduction_who_we_are}>
        <h1 className={styles.who_we_are__heading}>Who We Are</h1>
        <p className={styles.who_we_are__information}>
          Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation
          voluptate. Deserunt elit et minim magna pariatur quis exercitation
          amet consectetur excepteur pariatur.
        </p>
        <Link href="/contact_us">
          <button className={styles.who_we_are__cta}>Contact Us</button>
        </Link>
      </div>

      <div className={styles.intoduction_what_we_do}>
        <img
          className={styles.who_we_do__icon}
          src="/assets/what_we_do.svg"
          alt="what we do"
        />

        <h1 className={styles.who_we_do__heading}>What We Do</h1>
        <p className={styles.who_we_do__information}>
          Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation
          voluptate. Deserunt elit et minim magna pariatur quis exercitation
          amet consectetur excepteur pariatur.
        </p>
        <Link href="/about">
          <button>Read More</button>
        </Link>
      </div>

      <div className={styles.intoduction_services}>
        <img
          className={styles.services__icon}
          src="/assets/services_icon.svg"
        />

        <h1 className={styles.services__heading}>Our Services</h1>
        <p className={styles.services__information}>
          Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation
          voluptate. Deserunt elit et minim magna pariatur quis exercitation
          amet consectetur excepteur pariatur.
        </p>
        <Link href="/services">
          <button>Read More</button>
        </Link>
      </div>
      <TrainWithUs position={{ gridArea: ' 5 / 1 / span 1 / -1' }} />
    </section>
  )
}
