import Head from 'next/head'
import styles from '../../styles/contact-us.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import SectionHeader from '../../components/section-header'
import Footer from '../../components/footer'
import GoogleMap from '../../components/google-map'

export default function ContactUs() {
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
          customImageStyle={{
            transform: 'scale(.8)',
          }}
          imgSrc={'/assets/contact_us.svg'}
          title={'Contact Us'}
          section={'Contact Us'}
        />
        <section className={styles.contact_us_info_container}>
          <ul className={styles.contact_us_info_list}>
            <li className={styles.contact_us_info_address}>
              <img src="/assets/location_contact.svg" />
              <p>
                <strong>Address:</strong> 198 West 21th Street, Suite 721 New
                York NY 10016
              </p>
            </li>
            <li className={styles.contact_us_phone}>
              <img src="/assets/phone_contact.svg" />
              <p>
                <strong>Phone:</strong> + 1235 2355 98
              </p>
            </li>

            <li className={styles.contact_us_email}>
              <img src="/assets/contact_email.svg" />
              <p>
                <strong>Email:</strong>info@yoursite.com
              </p>
            </li>

            <li className={styles.contact_us_website}>
              <img src="/assets/contact_web.svg" />
              <p>
                <strong>Website:</strong> yoursite.com
              </p>
            </li>
          </ul>
        </section>
        <section className={styles.contact_form_container}>
          <form className={styles.contact_form}>
            <h1 className={styles.contact_form_title}> Contact Us</h1>
            <div className={styles.form_group}>
              <label htmlFor="fullname">FULL NAME</label>
              <input id="fullname" placeholder="Name" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email_address">EMAIL ADDRESS</label>
              <input id="email_address" placeholder="Email" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="subject">SUBJECT</label>
              <input id="subject" placeholder="Subject" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" placeholder="Message"></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </section>
        <section className={styles.contact_map}>
          <GoogleMap />
        </section>
        <Footer />
      </main>
    </>
  )
}
