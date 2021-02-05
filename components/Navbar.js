import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import Image from "next/image"

export default function Navbar() {
    const [backArrow, setBackArrow] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClicked(!clicked);

    useEffect(() => {
        window.addEventListener('scroll', () => {
          setScroll(window.scrollY > 1);
        });
      }, []);

    return (
        <nav className={scroll ? 'navbar nav-scroll' : 'navbar'}>
            <div className="navbar__name" >
                <Link
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <h1 className="navbar__text">J</h1>
                </Link>
            </div>
            <div className={clicked ? "navbar__menu-open" : "navbar__menu-closed"}>
                <ul className="navbar__menu-box" role="presentation" onClick={handleClick}>
                    <li className="nav__item" >
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClick}
                        >
                            About
                                </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClick}
                        >
                            Work
                                </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClick}
                        >
                            Skills
                                </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleClick}
                        >
                            Contact
                            </Link>
                    </li>
                </ul>
                {clicked ? (
                    <div className="hamburger__img" onClick={handleClick}>
                        <Image
                            src="/menu-close.png"
                            alt="button for closing the menu"
                            width={30}
                            height={30}
                        />
                    </div>
                ) : (
                        <div className="hamburger__img" onClick={handleClick}>
                            <Image
                                src="/menu.png"
                                alt="button for closing the menu"
                                width={30}
                                height={30}
                            />
                        </div>
                    )}
            </div>
        </nav>
    )
}