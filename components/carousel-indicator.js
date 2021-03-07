import styles from '../styles/carousel-indicator.module.scss'

const Dot = ({ selected, num }) => {
  return (
    <span
      key={num}
      className={styles.carousel_indicator}
      style={{
        opacity: selected ? '1' : '0.3',
      }}
    />
  )
}

export default function CarouselIndicator(props) {
  if (props.total < 2) {
    return <div key={props.index + 1} className={styles.indicator_wrapper} />
  } else {
    return (
      <div key={props.index + 1} className={styles.indicator_wrapper}>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} num={i} selected={props.index === i} />
        })}
      </div>
    )
  }
}
