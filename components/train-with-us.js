import styles from '../styles/train-with-us.module.scss'
export default function IntrouctionSection({ position }) {
  return (
    <div className={styles.train_with_us_container} style={position}>
      <div className={styles.train_img_cont}>
        <img src="/img3.jpg" className={styles.train_with_us_img} />
        <div className={styles.filter}></div>
      </div>

      <div className={styles.train_with_us_informations}>
        <h1 className={styles.train_with_us_heading}>We Offer Training</h1>
        <p className={styles.train_with_us_moto}>
          Far far away, behind the word mountains, far from the countries around
          the world.
        </p>
        <a
          className={styles.train_with_us_cta}
          href="/Annual Training Program Schedule- WQA.pdf"
          target="_blank"
        >
          <button className={styles.train_with_us_cta}>View Details</button>
        </a>
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
  )
}
