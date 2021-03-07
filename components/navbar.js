import Head from 'next/head'
import styles from '../styles/navbar.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar({ done = true }) {
  const [checked, setCheked] = useState(false)
  const [hide, setHide] = useState(false)
  const [scrollUp, setScrollUp] = useState({
    lastPos: 0,
    scroll: false,
    onTop: true,
  })
  const [classes, setClasses] = useState([`${styles.mobile_nav}`])
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos > 120) {
      if (currentScrollPos < scrollUp.lastPos) {
        setScrollUp({
          lastPos: currentScrollPos,
          scroll: true,
          onTop: false,
        })
        setHide(false)
      } else {
        setScrollUp({
          lastPos: currentScrollPos,
          scroll: false,
          onTop: false,
        })
        setHide(true)
      }
    } else if (currentScrollPos === 0) {
      setScrollUp({
        ...scrollUp,
        onTop: true,
      })
    } else {
      setHide(false)
      setScrollUp({
        ...scrollUp,
        scroll: false,
        onTop: false,
      })
    }
  }

  useEffect(() => {
    if (done) {
      setClasses([`${styles.container}`, 'ani-nav'])

      if (hide) {
        setCheked(false)
        setClasses([`${styles.container}`, 'mnav-hide'])
      }
      if (scrollUp.scroll) {
        setClasses([`${styles.container}`, 'ani-nav-scroll-down'])
      }

      if (scrollUp.onTop) {
        setClasses([`${styles.container}`, 'ani-nav'])
      }
    }
  }, [hide, scrollUp.onTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollUp.lastPos])
  return (
    <div className={classes.join(' ')}>
      <div className={styles.links_cont}>
        <div className={styles.nav_log_cont}>
          <Link href="/">
            <svg
              className={`${styles.svg_logo_mobile} logo_svg`}
              dataname="Component 10 – 1"
              width="45"
              height="45"
              viewBox="0 0 64 64"
            >
              <g
                id="Ellipse_2"
                dataname="Ellipse 2"
                fill="#fff"
                stroke="#3c58cb"
                strokeWidth="5"
              >
                <circle cx="32" cy="32" r="32" stroke="none" />
                <circle cx="32" cy="32" r="29.5" fill="none" />
              </g>
              <text
                id="WQA"
                transform="translate(10 38)"
                fill="#001c8e"
                fontSize="17"
                fontFamily="Poppins-Bold, Poppins"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  WQA
                </tspan>
              </text>
            </svg>
          </Link>
          <Link href="/">
            <h5>More that just a Certifacte</h5>
          </Link>
        </div>
        <div className={styles.nav_cta_cont}>
          <div className={styles.nav_cta_mobile_number_group}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="33.9"
              viewBox="0 0 21 33.9"
            >
              <path
                id="Icon_material-phone-android"
                data-name="Icon material-phone-android"
                d="M24,1.5H12A4.556,4.556,0,0,0,7.5,6.123V30.777A4.556,4.556,0,0,0,12,35.4H24a4.556,4.556,0,0,0,4.5-4.623V6.123A4.556,4.556,0,0,0,24,1.5ZM21,32.318H15V30.777h6ZM25.875,27.7H10.125V6.123h15.75Z"
                transform="translate(-7.5 -1.5)"
              />
            </svg>
            <label className={styles.nav_cta_mobile_number}>
              +639 123 234 456
            </label>
          </div>
          <div className={styles.nav_cta_email_group}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.075"
              height="25.064"
              viewBox="0 0 37.075 25.064"
            >
              <path
                id="Icon_zocial-email"
                data-name="Icon zocial-email"
                d="M-.062,27.168v-21a4.212,4.212,0,0,1,0-1l12,11-12,12A3.419,3.419,0,0,1-.062,27.168Zm2-23c.168-.072-.24,0,0,0h33a4.643,4.643,0,0,1,1,0l-12,10-2,2-3,2-3-2-2-2Zm0,25,12-12,5,4,5-4,12,12a4.642,4.642,0,0,1-1,0h-33C1.746,29.168,2.13,29.24,1.938,29.168Zm23-13,12-11a4.641,4.641,0,0,1,0,1v21a4.637,4.637,0,0,1,0,1Z"
                transform="translate(0.105 -4.136)"
              />
            </svg>

            <label className={styles.nav_cta_email}>email@example.com</label>
          </div>
          <button className={`${styles.nav_cta} desktop_nav_cta`}>
            Get Certified
          </button>
        </div>
      </div>
      <div className={styles.main_links_cont}>
        <div className={`${styles.main_links_list_cont} desktop_nav`}>
          <div className={`${styles.main_links_filler_cont} desktop_nav`}></div>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/contact_us">Contact</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/clients">Clients</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
