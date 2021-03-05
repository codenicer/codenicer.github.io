import styles from '../styles/section-header.module.scss'

export default function SectionHeader({ imgSrc, title, section }) {
  return (
    <section className={styles.header}>
      <img className={styles.header_img} src={imgSrc} />
      <h1 className={styles.header_title}>{title}</h1>
      <h5 className={styles.header_subtitle}>
        Home {'>'} {section} {'>'}
      </h5>
    </section>
  )
}
