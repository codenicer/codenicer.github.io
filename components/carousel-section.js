import styles from '../styles/home.module.scss'
import { generalSetting } from '../settings/general'
import CarouselIndicator from './carousel-indicator'
import Carousel from 're-carousel'
import { useRouter } from 'next/router'

export default function CarouselSection() {
  const router = useRouter()

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push('/contact_us')
  // }

  // const buttonn = () => {
  //   return (
  //     <button onClick={handleClick} className={styles.hero_cont__headline_cta}>
  //       lets go
  //     </button>
  //   )
  // }
  return (
    <section className={styles.carousel_container}>
      <Carousel loop auto widgets={[CarouselIndicator]}>
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
                {/* {content.button ? (
                  <button
                    onClick={handleClick}
                    className={styles.hero_cont__headline_cta}
                  >
                    {content.button}
                  </button>
                ) : (
                  <></>
                )} */}
              </div>
            </>
          )
        })}
      </Carousel>
    </section>
  )
}
