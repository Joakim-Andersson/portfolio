import Link from "next/link";
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className="stars">
      <div className="small"></div>
      <div className="medium"></div>
      <div className="big"></div>
      <main className={styles.main__header}>
        <div className="main__header">
          <h1>Fullstack developer</h1>
          <h3>Joakim Andersson</h3>
        </div>

        
      </main>
    </div>
  )
}
