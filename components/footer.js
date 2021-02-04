import React from 'react'
import { Link } from 'react-scroll';


function Footer() {
    return (
        <footer>
            <Link
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <p className="navbar__text">Go to top again</p>
                </Link>

            <h3>Copyright Joakim Andersson 2021 </h3>
        </footer>
    )
}

export default Footer
