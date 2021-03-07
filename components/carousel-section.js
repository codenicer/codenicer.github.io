import styles from '../styles/home.module.scss'
import { generalSetting } from '../settings/general'
import CarouselIndicator from './carousel-indicator'
import Carousel from 're-carousel'

export default function CarouselSection() {
  return (
    <section className={styles.carousel_container}>
      <Carousel loop auto widgets={[CarouselIndicator]}>
        {generalSetting.carousel.map((content, i) => {
          return (
            <>
              <div
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
              </div>
            </>
          )
        })}
      </Carousel>
    </section>
  )
}
