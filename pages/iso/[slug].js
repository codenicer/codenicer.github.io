import Head from 'next/head'
import styles from '../../styles/iso.module.scss'
import MobileNavbar from '../../components/mobile-navbar'
import SectionHeader from '../../components/section-header'
import Footer from '../../components/footer'
import { useRouter } from 'next/router'
import ServicesList from '../../components/services-list'

import { isoServiceList } from '../../settings/iso-service-list'
export default function Iso() {
  const router = useRouter()
  const { slug } = router.query
  const iso = isoServiceList[slug]
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>WQA | {iso?.title ? iso.title : 'Not Found'}</title>
      </Head>
      <header className={styles.nav_container}>
        <MobileNavbar />
      </header>
      <main className="section_container" style={{ overflowX: 'hidden' }}>
        <SectionHeader
          iso={true}
          imgSrc={`/${iso?.imgSrc ? `uploads/${iso.imgSrc}` : 'not-found.jpg'}`}
          title={`${iso?.title ? iso.title : 'Not Found'}`}
          section={'Iso'}
        />
        {!iso ? (
          <></>
        ) : (
          <section className={styles.iso_contaner}>
            <h1 className={styles.iso_contaner_title}>{iso.title}</h1>
            {iso.headline.map((content, i) => {
              return (
                <>
                  <h1 key={i} className={styles.iso_headline}>
                    {content.headlineText}
                  </h1>
                  {!content.headlineList ? (
                    <></>
                  ) : (
                    <ul className={styles.iso_headline_list}>
                      {content.headlineList.map((text, i) => {
                        return <li key={i}> {text}</li>
                      })}
                    </ul>
                  )}
                </>
              )
            })}

            {iso.subHeadline.map((content, i) => {
              return (
                <>
                  <h1 key={i} className={styles.iso_sub_headline}>
                    {content.subheadlineText}
                  </h1>
                  {!content.subheadlineList ? (
                    <></>
                  ) : (
                    <ul className={styles.iso_sub_headline_list}>
                      {content.subheadlineList.map((text, i) => {
                        return <li key={i}> {text}</li>
                      })}
                    </ul>
                  )}
                </>
              )
            })}
          </section>
        )}
        <ServicesList />
        <Footer />
      </main>
    </>
  )
}

//
// <p className={styles.iso_headline}>{iso.headline}</p>

// <p className={styles.iso_sub_headline}>{iso.subHeadline}</p>
