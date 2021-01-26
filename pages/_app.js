import '../styles/globals.css'
import '../styles/stars.css'
import '../styles/contact.css'
import "../styles/Navbar.css"
import "../styles/about.scss"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
  <div>
  <Navbar/>
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
