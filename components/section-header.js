import styles from '../styles/section-header.module.scss'

export default function SectionHeader({
  imgSrc,
  title,
  section,
  customImageStyle,
  iso,
}) {
  return (
    <section className={` ${styles.header} ${iso ? styles.header_iso : ''}`}>
      <img
        className={iso ? styles.header_img_iso : styles.header_img}
        style={customImageStyle}
        src={imgSrc}
      />
      <h1 className={styles.header_title}>{title}</h1>
      <h5 className={styles.header_subtitle}>
        Home {'>'} {section} {'>'}
      </h5>
    </section>
  )
}
