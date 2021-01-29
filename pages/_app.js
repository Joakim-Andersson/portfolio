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
import Home from "../pages/index"
import About from "../pages/about"
import Contact from "../pages/contact"
import Skills from "../pages/skills"
import Work from "../pages/Work"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Joakim - that's me!</title>
        <link rel="icon" href="/joakim.png" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default MyApp
