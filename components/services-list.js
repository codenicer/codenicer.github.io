import styles from '../styles/services.module.scss'
export default function Services() {
  return (
    <section className={styles.service_list_container}>
      <h1 className={styles.service_list_header}>Available Services</h1>
      <ul className={styles.sevices_list}>
        <li className={styles.service_container}>
          <h1 className={styles.sevices_title}>ISO 9001</h1>
          <p className={styles.sevices_info}>
            The ISO 9001 is a series of requirements that, when consistently
            applied to your company that ensures SATISFACTION ,MANAGEMENT,
            CONTROL, COMPLIANCE...
          </p>
          <button className={styles.sevices_read_more}>Read More</button>
        </li>
        <li className={styles.service_container}>
          <h1 className={styles.sevices_title}>ISO 9001</h1>
          <p className={styles.sevices_info}>
            The ISO 9001 is a series of requirements that, when consistently
            applied to your company that ensures SATISFACTION ,MANAGEMENT,
            CONTROL, COMPLIANCE...
          </p>
          <button className={styles.sevices_read_more}>Read More</button>
        </li>
        <li className={styles.service_container}>
          <h1 className={styles.sevices_title}>ISO 9001</h1>
          <p className={styles.sevices_info}>
            The ISO 9001 is a series of requirements that, when consistently
            applied to your company that ensures SATISFACTION ,MANAGEMENT,
            CONTROL, COMPLIANCE...
          </p>
          <button className={styles.sevices_read_more}>Read More</button>
        </li>
        <li className={styles.service_container}>
          <h1 className={styles.sevices_title}>ISO 9001</h1>
          <p className={styles.sevices_info}>
            The ISO 9001 is a series of requirements that, when consistently
            applied to your company that ensures SATISFACTION ,MANAGEMENT,
            CONTROL, COMPLIANCE...
          </p>
          <button className={styles.sevices_read_more}>Read More</button>
        </li>
      </ul>
    </section>
  )
}
