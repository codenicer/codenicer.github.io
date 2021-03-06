import Head from 'next/head'
import styles from '../../styles/services.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import SectionHeader from '../../components/section-header'
import Footer from '../../components/footer'
export default function Services() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA | Services</title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className={styles.container}>
        <SectionHeader
          customImageStyle={{
            transform: 'scale(.8)',
          }}
          imgSrc={'/assets/services.svg'}
          title={'Our Services'}
          section={'Services'}
        />
        <section className={styles.services_info_cont}>
          <h1 className={styles.services_title}>Our Services</h1>
          <p className={styles.services_title}>
            WQA is a reputable management system provider, worldwide. We at
            Worldwide Quality Assurance (WQA) provide quality services to our
            clients through internationally recognized accredited certifications
            for the ideal Quality Standards. WQA is your partner in making
            management system better and effective through its value-added
            assessments. Our work ethics are built on fundamental respects for
            customer satisfaction. We have the strength of experienced and
            calibrated professionals across the countries. Our products are
            Management System Certification ISO 9001, ISO 14001, OHSAS 18001,
            ISO 13485, ISO 22000, HACCP, GMP , ISO 22301, ISO 27001, ISO 50001,
            ISO 37001,2nd Party Audit, Independent Supplier/Vendor Assessment.
            We can provide Training like as IRCA & IEMA International Lead
            Auditor Courses (ISO 9001, ISO 14001, OHSAS 18001, ISO 22000, ISO
            27001, GMP, HACCP, ISO 37001 & ISO 50001). And also provide other
            training that are related to ISO and Process Improvements.
          </p>
        </section>
        <Footer />
      </main>
    </>
  )
}
