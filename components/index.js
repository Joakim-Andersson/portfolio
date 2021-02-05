import Image from "next/image"
import { Link } from 'react-scroll';
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div id="top" className="stars">
      <div className="small"></div>
      <div className="medium"></div>
      <div className="big"></div>
      <main className={styles.main__header}>
        <div className={styles.main__header__text}>
          <h1 className={styles.main__header__first}>Hey there,<br /> I'm
            <span className={styles.main__header__name} > Joakim</span>
          </h1>
          <p className={styles.main__header__p}>Full-stack Developer </p>
        </div>
        <div className={styles.main__arrow}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Image className={styles.main_arrow_img}
              src="/down-arrow.png"
              alt="arrow down to show there is a need to scroll"
              width={70}
              height={70} />
          </Link>
        </div>
      </main>
    </div>
  )
}
