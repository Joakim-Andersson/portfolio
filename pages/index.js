import Image from "next/image"
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className="stars">
      <div className="small"></div>
      <div className="medium"></div>
      <div className="big"></div>
      <main className={styles.main__header}>
        <div className="main__header">
          <h1 className={styles.main__header__first}>Hey there, I'm <br/>
            <span className={styles.main__header__name} > J</span>oakim
          </h1>
          <p className={styles.main__header__p}>Welcome to my portfolio </p>
          <div className={styles.main__arrow}>
                <Image className={styles.main_arrow_img}
                    src="/down-arrow.png"
                    alt="Linkedin Icon"
                    width={70}
                    height={70}
                />
            </div>
        </div>
      </main>
    </div>
  )
}
