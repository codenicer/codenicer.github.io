import styles from '../styles/home.module.scss'
import { generalSetting } from '../settings/general'
import CarouselIndicator from './carousel-indicator'
import Carousel from 're-carousel'
import Link from 'next/link'

export default function CarouselSection() {
  return (
    <section className={styles.carousel_container}>
      <Carousel loop auto interval={8000} widgets={[CarouselIndicator]}>
        {generalSetting.carousel.map((content, i) => {
          return (
            <>
              <div
                key={i}
                className={styles.carousel_img}
                style={{
                  backgroundImage: `url('${content.img}')`,
                }}
              ></div>

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
            </>
          )
        })}
      </Carousel>
    </section>
  )
}
