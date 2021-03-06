import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/mobile-navbar.module.scss'

export default function MobileNavbar({ done = true }) {
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
      setClasses([`${styles.mobile_nav}`, 'ani-nav'])
      if (hide) {
        setCheked(false)
        setClasses([`${styles.mobile_nav}`, 'mnav-hide'])
      }
      if (scrollUp.scroll) {
        setClasses([`${styles.mobile_nav}`, 'ani-nav-scroll-down'])
      }

      if (scrollUp.onTop) {
        setClasses([`${styles.mobile_nav}`, 'ani-nav'])
      }
    }
  }, [hide, done, scrollUp.onTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollUp.lastPos])

  return (
    <nav className={classes.join(' ')}>
      <Link href="/">
        <svg
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
      <input
        checked={checked}
        onChange={() => setCheked(!checked)}
        type="checkbox"
        className={styles.mobile_nav_checkbox}
      />
      <div className={styles.mobile_nav_humberger}>
        <div></div>
      </div>

      <div className={styles.mobile_nav_link_container}>
        <div>
          <div>
            <ul className={styles.mobile_nav_link_list}>
              <li>
                <Link href="/">
                  <a>
                    <div className={styles.mobile_nav__list_cont}>
                      <svg width="20" height="20" viewBox="0 0 30.849 27.987">
                        <path
                          id="Icon_metro-home"
                          dataname="Icon metro-home"
                          d="M33.419,19.715,17.995,7.743,2.571,19.716V14.834L17.995,2.861,33.419,14.834Zm-3.856-.435V30.849H21.851V23.136H14.139v7.712H6.427V19.28L17.995,10.6Z"
                          transform="translate(-2.571 -2.861)"
                          fill="#fff"
                        />
                      </svg>

                      <p>Home</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a styles={{ textDecoration: 'none' }}>
                    <div className={styles.mobile_nav__list_cont}>
                      <svg width="20" height="20" viewBox="0 0 18 36">
                        <path
                          id="Icon_open-info"
                          dataname="Icon open-info"
                          d="M13.5,0A4.5,4.5,0,1,0,18,4.5,4.513,4.513,0,0,0,13.5,0ZM6.75,11.25A6.741,6.741,0,0,0,0,18H4.5A2.25,2.25,0,0,1,9,18c0,1.26-4.5,7.38-4.5,11.25A6.657,6.657,0,0,0,11.25,36,6.741,6.741,0,0,0,18,29.25H13.5a2.25,2.25,0,0,1-4.5,0c0-1.62,4.5-8.28,4.5-11.25A6.8,6.8,0,0,0,6.75,11.25Z"
                          fill="#fff"
                        />
                      </svg>

                      <p>About</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>
                    <div className={styles.mobile_nav__list_cont}>
                      <svg width="20" height="20" viewBox="0 0 45 25">
                        <path
                          id="Icon_awesome-hands-helping"
                          dataname="Icon awesome-hands-helping"
                          d="M34.313,13.5H23.625v3.938a5.063,5.063,0,0,1-10.125,0V8.887L8.937,11.63A4.49,4.49,0,0,0,6.75,15.483v3.326L1.125,22.057A2.245,2.245,0,0,0,.3,25.13l5.625,9.745A2.251,2.251,0,0,0,9,35.7l7.27-4.2h9.6a4.5,4.5,0,0,0,4.5-4.5H31.5a2.248,2.248,0,0,0,2.25-2.25v-4.5h.563A1.683,1.683,0,0,0,36,18.563V15.188A1.683,1.683,0,0,0,34.313,13.5ZM44.7,10.87,39.073,1.125A2.251,2.251,0,0,0,36,.3L28.73,4.5H21.544a4.534,4.534,0,0,0-2.384.682L16.8,6.652A2.235,2.235,0,0,0,15.75,8.557v8.88a2.813,2.813,0,0,0,5.625,0V11.25H34.313a3.94,3.94,0,0,1,3.938,3.938v2l5.625-3.248A2.252,2.252,0,0,0,44.7,10.87Z"
                          transform="translate(0.002 -0.002)"
                          fill="#fff"
                        />
                      </svg>

                      <p href="#experiences">Services </p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact_us">
                  <a>
                    <div className={styles.mobile_nav__list_cont}>
                      <svg width="20" height="20" viewBox="0 0 32.835 32.895">
                        <path
                          id="Icon_feather-phone"
                          dataname="Icon feather-phone"
                          d="M33,25.38v4.5a3,3,0,0,1-3.27,3,29.685,29.685,0,0,1-12.945-4.6,29.25,29.25,0,0,1-9-9A29.685,29.685,0,0,1,3.18,6.27,3,3,0,0,1,6.165,3h4.5a3,3,0,0,1,3,2.58A19.26,19.26,0,0,0,14.715,9.8a3,3,0,0,1-.675,3.165l-1.905,1.9a24,24,0,0,0,9,9l1.9-1.905a3,3,0,0,1,3.165-.675,19.26,19.26,0,0,0,4.215,1.05A3,3,0,0,1,33,25.38Z"
                          transform="translate(-1.667 -1.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                      </svg>

                      <p>Contact</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/clients">
                  <a>
                    <div className={styles.mobile_nav__list_cont}>
                      <svg width="20" height="20" viewBox="0 0 31.5 15">
                        <path
                          id="Icon_ionic-md-people"
                          dataname="Icon ionic-md-people"
                          d="M23.727,17.153a4.49,4.49,0,0,0,4.3-4.639,4.49,4.49,0,0,0-4.3-4.639,4.49,4.49,0,0,0-4.3,4.639A4.49,4.49,0,0,0,23.727,17.153Zm-11.454,0a4.49,4.49,0,0,0,4.3-4.639,4.49,4.49,0,0,0-4.3-4.639,4.49,4.49,0,0,0-4.3,4.639A4.49,4.49,0,0,0,12.273,17.153Zm0,3.4c-3.365,0-10.023,1.778-10.023,5.412v4.175H22.5V25.966C22.5,22.332,15.638,20.554,12.273,20.554Zm11.454.851a6.958,6.958,0,0,0-1.227.077c1.647,1.314,2.25,2.165,2.25,4.484v4.175h9V25.966C33.75,22.332,27.092,21.4,23.727,21.4Z"
                          transform="translate(-2.25 -7.875)"
                          fill="#fff"
                        />
                      </svg>

                      <p>Clients </p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
