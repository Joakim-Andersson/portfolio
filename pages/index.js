import Link from "next/link";
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className="stars">
      <div className="small"></div>
      <div className="medium"></div>
      <div className="big"></div>

      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hey there, <strong>I'm Joakim!</strong>
          </h1>

          <h2 className={styles.description}>
            I’m a fullstack developer who loves building user-friendly websites and apps!
        </h2>

          <div className={styles.grid}>

            <Link href="/about">
              <a className={styles.card}>
                <h3>About me &rarr;</h3>
                <p>User experience and fast rendered websites is what motivates me.</p>
              </a>
            </Link>


            <a href="/work" className={styles.card}>
              <h3>Work &rarr;</h3>
              <p>Check out what I've built and produly want to show off.</p>
            </a>

            <a href="/contact" className={styles.card} >
              <h3>Contact &rarr;</h3>
              <p>Get in contact with me for projects and ideas you might have.</p>
            </a>

            <a href="/skills" className={styles.card} >
              <h3>Skills &rarr;</h3>
              <p>
                The frameworks, languages and programs i'm most confident in.
            </p>
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
        <p>Copyright - Joakim 2021</p>
        </footer>
      </div>
    </div>
  )
}
