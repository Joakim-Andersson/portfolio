import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/style.css";
import "../styles/WithScrollbar.css";
import '../styles/globals.css'
import '../styles/stars.css'
import '../styles/contact.css'
import "../styles/Navbar.scss"
import "../styles/Skills.scss"
import "../styles/skillsbox.scss"
import "../styles/about.scss"
import "../styles/work.scss"
import "../styles/footer.scss"
import "../styles/map.scss"
import 'mapbox-gl/dist/mapbox-gl.css';
import Head from 'next/head'

import Navbar from "../components/Navbar"
import Home from "../components/index"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Work from "../components/work"
import Footer from "../components/footer"


function MyApp() {
  return (
    <div >
      <Head>
        <title>Joakim - that's me!</title>
        <link rel="icon" href="/joakim.png" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default MyApp
