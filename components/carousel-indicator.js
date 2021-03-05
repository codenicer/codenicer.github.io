import styles from '../styles/carousel-indicator.module.scss'

const Dot = ({ selected }) => {
  return (
    <span
      className={styles.carousel_indicator}
      style={{
        opacity: selected ? '1' : '0.3',
      }}
    />
  )
}

export default function CarouselIndicator(props) {
  if (props.total < 2) {
    return <div key={props.index} className={styles.indicator_wrapper} />
  } else {
    return (
      <div key={props.index} className={styles.indicator_wrapper}>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />
        })}
      </div>
    )
  }
}
