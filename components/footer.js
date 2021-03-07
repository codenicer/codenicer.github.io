import styles from '../styles/home.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.main_footer}>
      <svg
        className={`${styles.svg_logo_nav}`}
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
      <p className={styles.about_footer}>
        Exercitation eiusmod eu pariatur duis sunt nostrud eu. Incididunt ad
        aliqua nulla ea fugiat reprehenderit minim quis quis. Exercitation nulla
        ipsum occaecat sunt reprehenderit.
      </p>
      <h5 className={styles.footer_title}>Company</h5>
      <ul className={styles.footer_title__links}>
        <li className={styles.footer_title__link}>Home</li>
        <li className={styles.footer_title__link}>Services</li>
        <li className={styles.footer_title__link}>About</li>
        <li className={styles.footer_title__link}>Contact</li>
      </ul>
      <h5 className={styles.footer_title}>Contact</h5>
      <ul className={styles.footer_title__links}>
        <li className={styles.footer_title__link}>+81231 1231</li>
        <li className={styles.footer_title__link}>+81231 12312</li>
        <li className={styles.footer_title__link}>email@example.com</li>
      </ul>
      <h5 className={styles.footer_title}>Services</h5>
      <ul className={styles.footer_title__links}>
        <li className={styles.footer_title__link}>Sub link1</li>
        <li className={styles.footer_title__link}>Sub link2</li>
      </ul>
      <h5 className={styles.footer_title}>Connect</h5>
      <ul className={styles.footer_title__links}>
        <li className={styles.footer_title__link}>
          <svg width="20" height="20" viewBox="0 0 34.875 34.873">
            <path
              id="Icon_awesome-facebook-messenger"
              data-name="Icon awesome-facebook-messenger"
              d="M18.039.563C8.193.563.563,7.758.563,17.478A16.531,16.531,0,0,0,6.052,29.989c.587.528.466.834.566,4.094a1.4,1.4,0,0,0,1.96,1.235c3.72-1.638,3.768-1.768,4.4-1.6,10.778,2.966,22.461-3.931,22.461-16.245C35.438,7.758,27.885.563,18.039.563ZM28.532,13.579,23.4,21.705a2.628,2.628,0,0,1-3.791.7l-4.084-3.056a1.055,1.055,0,0,0-1.266,0l-5.51,4.179a.829.829,0,0,1-1.2-1.1L12.679,14.3a2.627,2.627,0,0,1,3.791-.7l4.082,3.056a1.055,1.055,0,0,0,1.266,0l5.513-4.175a.827.827,0,0,1,1.2,1.1Z"
              transform="translate(-0.563 -0.563)"
              fill="#fff"
            />
          </svg>
        </li>
        <li className={styles.footer_title__link}>
          <svg width="20" height="20" viewBox="0 0 31.5 31.5">
            <path
              id="Icon_awesome-linkedin"
              data-name="Icon awesome-linkedin"
              d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z"
              transform="translate(0 -2.25)"
              fill="#fff"
            />
          </svg>
        </li>
        <li className={styles.footer_title__link}>
          <svg width="22" height="20" viewBox="0 0 36 29.239">
            <path
              id="Icon_awesome-twitter"
              data-name="Icon awesome-twitter"
              d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
              transform="translate(0 -3.381)"
              fill="#fff"
            />
          </svg>
        </li>
        <li className={styles.footer_title__link}>
          <svg width="20" height="20" viewBox="0 0 31.518 31.511">
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
              transform="translate(0.005 -2.238)"
              fill="#fff"
            />
          </svg>
        </li>
      </ul>
      <p className={styles.copy_rights}>
        Copyright ©2021 All rights reserved | This website is owned by WQA
        Phillippines
      </p>
    </footer>
  )
}
