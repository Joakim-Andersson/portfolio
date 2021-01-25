import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div className="stars">
      <div class="small"></div>
      <div class="medium"></div>
      <div class="big"></div>

      <div className={styles.container}>
        <Head>
          <title>Joakim - that's me!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <nav className={styles.nav}>
            <Link href="/">
            <h1>Joakim</h1>
            </Link>
            <h1>menu</h1>
          </nav>
          <h1 className={styles.title}>
            Hello, <strong>I'm Joakim!</strong>
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
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  )
}
