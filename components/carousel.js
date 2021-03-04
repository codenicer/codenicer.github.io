import styles from '../styles/carousel.module.scss'

export default function Navbar({ children }) {
  return (
    <section className={styles.carousel_const}>
      <ol className={styles.carousel__viewport}>
        <li
          id="carousel__slide1"
          className={styles.carousel__slide}
          tabindex="0"
        >
          <div className={styles.carousel__snapper}></div>
        </li>
        <li
          id="carousel__slide2"
          tabindex="0"
          className={styles.carousel__slide}
        >
          <div className={styles.carousel__snapper}></div>
        </li>
      </ol>
      <aside className={styles.carousel__navigation}>
        <ol className={styles.carousel__navigation_list}>
          <li className={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide1"
              className={styles.carousel__navigation_button}
            >
              Go to slide 1
            </a>
          </li>
          <li className={styles.carousel__navigation_item}>
            <a
              href="#carousel__slide2"
              className={styles.carousel__navigation_button}
            >
              Go to slide 2
            </a>
          </li>
        </ol>
      </aside>
    </section>
  )
}
