import React from 'react'
import { Link } from 'react-scroll';
import Image from "next/image";


function Footer() {
    return (
        <footer>
            <h3>Copyright © 2021 - Joakim Andersson</h3>
            <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <Image 
              src="/up-arrow.png"
              alt="arrow to click for scrolling up"
              width={20}
              height={20} />
          </Link>

        </footer>
    )
}

export default Footer
