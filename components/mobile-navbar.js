import { useEffect, useState } from 'react'
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
      <svg
        data-name="Component 10 – 1"
        width="45"
        height="45"
        viewBox="0 0 64 64"
      >
        <g
          id="Ellipse_2"
          data-name="Ellipse 2"
          fill="#fff"
          stroke="#3c58cb"
          stroke-width="5"
        >
          <circle cx="32" cy="32" r="32" stroke="none" />
          <circle cx="32" cy="32" r="29.5" fill="none" />
        </g>
        <text
          id="WQA"
          transform="translate(10 38)"
          fill="#001c8e"
          font-size="17"
          font-family="Poppins-Bold, Poppins"
          font-weight="700"
        >
          <tspan x="0" y="0">
            WQA
          </tspan>
        </text>
      </svg>
      <h5>More that just a Certifacte</h5>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experiences">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
