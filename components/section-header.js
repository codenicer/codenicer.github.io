export default function About({ imgSrc, title, section }) {
  //"/assets/about_us.svg"
  return (
    <section className={styles.about_header}>
      <img className={styles.about_header_img} src={imgSrc} />
      <h1 className={styles.about_header_title}>{title}</h1>
      <h5 className={styles.about_header_subtitle}>
        Home {'>'} {section} {'>'}
      </h5>
    </section>
  )
}
