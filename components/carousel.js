import styles from '../styles/carousel.module.scss'
import { generalSetting } from '../settings/general'

export default function Navbar() {
  return (
    <section className={styles.carousel_const}>
      <ol className={styles.carousel__viewport}>
        {generalSetting.carousel.map((content, i) => {
          return (
            <>
              <li
                id={`carousel__slide${i}`}
                className={styles.carousel__slide}
                style={{ backgroundImage: `url(${content.img})` }}
                tabIndex={i}
              >
                <div className={styles.carousel__hero_cont}>
                  <h3 className={styles.hero_cont__sub_headline}>
                    {content.subHeadline}
                  </h3>
                  <h1 className={styles.hero_cont__headline}>
                    {content.subHeadline}
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
              </li>
            </>
          )
        })}
      </ol>
      <aside className={styles.carousel__navigation}>
        <ol className={styles.carousel__navigation_list}>
          {generalSetting.carousel.map((content, i) => {
            return (
              <li className={styles.carousel__navigation_item}>
                <a
                  href={`#carousel__slide${i}`}
                  className={styles.carousel__navigation_button}
                >
                  Go to slide 1
                </a>
              </li>
            )
          })}
        </ol>
      </aside>
    </section>
  )
}
