import '../styles/globals.css'
import '../styles/stars.css'
import '../styles/contact.css'
import "../styles/Navbar.css"
import "../styles/Skills.scss"
import "../styles/skillsbox.scss"
import "../styles/about.scss"
import "../styles/work.scss"
import Head from 'next/head'

import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Joakim - that's me!</title>
        <link rel="icon" href="/joakim.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
