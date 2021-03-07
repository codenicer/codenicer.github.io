import Head from 'next/head'
import styles from '../../styles/clients.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import SectionHeader from '../../components/section-header'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { clients } from '../../settings/client-list'
export default function Clients() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA | About</title>
      </Head>
      <header className={styles.nav_container}>
        <Navbar />
        <MobileNavbar />
      </header>
      <main className="section_container">
        <SectionHeader
          customImageStyle={{
            transform: 'scale(.8)',
          }}
          imgSrc={'/assets/clients.svg'}
          title={'Our Clients'}
          section={'Clients'}
        />
        <section className={styles.client_section_container}>
          <div className={styles.clients_list_container}>
            {clients.map((client, i) => {
              return (
                <div key={i} className={styles.client_paper}>
                  <h1>{client.name}</h1>
                  <img src={client.imgSrc} />
                  <div className={styles.client_paper_filler}>
                    {client.web ? (
                      <a href={client.web} target="_blank">
                        Visit Website
                      </a>
                    ) : (
                      <p className={styles.web_no_avail}>
                        Website Not Available
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
