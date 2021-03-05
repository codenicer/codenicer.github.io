import Head from 'next/head'
import styles from '../../styles/about.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import Footer from '../../components/footer'
import TrainWithUs from '../../components/train-with-us'
import SectionHeader from '../../components/section-header'
export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA | About</title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className="section_container">
        <SectionHeader
          imgSrc={'/assets/about_us.svg'}
          title={'About Us'}
          section={'About'}
        />
        <section className={styles.who_we_are}>
          <h1 className={styles.profile_title}>
            We are a UKAS accredited certification body
          </h1>
          <p className={styles.info}>
            <span className={styles.info_highlighted}>
              Worldwide Quality Assurance (WQA)
            </span>{' '}
            is an international certification body providing certification for
            various management systems in diverse sectors. We offers multiple
            management system certifications to companies around the world, with
            the head office based in the United Kingdom (UK).
          </p>
          <p className={styles.info}>
            <span className={styles.info_highlighted}>
              Worldwide Quality Assurance Asia Pacific (WQA-APAC) is the biggest
              regional office that covers the Asia Pacific region{' '}
            </span>{' '}
            , and Jakarta houses this office. We have recently put up a branch
            in the Philippines in 2017 to cater to the increasing demand of our
            customers
          </p>

          <h1 className={styles.profile_title}>Why Choose Us</h1>
          <p className={styles.info}>
            Management systems are currently sweeping the globe, and{' '}
            <span className={styles.info_highlighted}>
              {' '}
              Worldwide Quality Assurance can bring the system that is right for
              your company directly to your doorstep.{' '}
            </span>{' '}
            The management system can apply to any business of any size, whether
            service or product oriented.
          </p>
          <p className={styles.info}>
            All of the standards are common sense standards that help you obtain
            consistency with the desired quality of your product or service.{' '}
            <span className={styles.info_highlighted}>
              {' '}
              We can assist you every step of the way to becoming a company
              certified
            </span>{' '}
            in the standard that suits your specific needs.
          </p>
          <p className={styles.info}>
            UKAS has accredited WQA, and their scope of accreditation with like
            authorities is one of the broadest available. Accreditation by them
            means that{' '}
            <span className={styles.info_highlighted}>
              {' '}
              WQA is regularly and rigorously assessed against internationally
              recognized standards
            </span>{' '}
            to demonstrate its{' '}
            <span className={styles.info_highlighted}>
              competence, impartiality{' '}
            </span>{' '}
            and
            <span className={styles.info_highlighted}>
              {' '}
              performance capability.{' '}
            </span>
          </p>
          <p className={styles.info}>
            Once you achieve registration to your chosen management system
            standard, you are then armed with a valuable marketing tool and the
            award of the{' '}
            <span className={styles.info_highlighted}>
              {' '}
              certificate will enable you to announce your success to your
              customers, stakeholders and the community at large.
            </span>
          </p>
          <p className={styles.info}>
            <span className={styles.info_highlighted}>
              We will work in partnership with your organization to ensure that
              you have implemented your management system
            </span>{' '}
            in line with the requirements of the standard and provide you with a
            detailed report outlining our findings and recommendations for
            future assessments, at the end of each visit.
          </p>
          <p className={styles.info}>
            <span className={styles.info_highlighted}>
              {' '}
              Our commitment is to give value-added services to all of our
              clients.{' '}
            </span>{' '}
            Our value-added services have earned our company an excellent
            reputation it enjoys today. WQA is always dedicated to maintain and
            expand the competencies and expertise to address the diverse needs
            of our clients.
          </p>
          <p className={styles.info}>
            Although we established the office in the Philippines just recently,
            experienced people who are competent and capable in the field of
            certification and training manage all operational activities.
            <span className={styles.info_highlighted}>
              WQA is an organization that is very attentive and strict to the
              employees' competence. ​
            </span>
          </p>
        </section>
        <TrainWithUs />
        <Footer />
      </main>
    </>
  )
}
