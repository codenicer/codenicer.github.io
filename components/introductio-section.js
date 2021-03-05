import styles from '../styles/home.module.scss'
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
        <button className={styles.who_we_are__cta}>Contact Us</button>
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
      </div>

      <div className={styles.train_with_us_container}>
        <img src="/img3.jpg" className={styles.train_with_us_img}></img>

        <div className={styles.train_with_us_informations}>
          <h1 className={styles.train_with_us_heading}>We Offer Training</h1>
          <p className={styles.train_with_us_moto}>
            Far far away, behind the word mountains, far from the countries
            around the world.
          </p>
          <button className={styles.train_with_us_cta}>View Details</button>
          <ul>
            <li>
              <h5>700</h5>
              <p>Certicate Issued</p>
            </li>
            <li>
              <h5>600</h5>
              <p>Happy Clients</p>
            </li>
            <li>
              <h5>999</h5>
              <p>Business Partners</p>
            </li>
            <li>
              <h5>700</h5>
              <p>Consultant</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
