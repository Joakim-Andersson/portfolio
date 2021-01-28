import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
    const [backArrow, setBackArrow] = useState(false);

    const handleBackClick = () => {
        setBackArrow(false)
    }

    useEffect(() => {
        if (window.location.pathname != "/") {
            setBackArrow(true)
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar__arrow" onClick={handleBackClick}>
                {backArrow ? (
                    <>
                        <Link href="/">
                            <Image
                                src="/backarrow.png"
                                alt="backarrow Icon"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <h1 className="navbar__text">Joakim</h1>
                            </Link>
                        </>
                    )
                }
            </div>
            <section className="navbar__contact">
                <div className="navbar__images">
                    <div className="image">
                        <a href="https://www.linkedin.com/in/joakim-per-oskar-andersson/" target="_blank">
                            <Image
                                src="/linkedin.png"
                                alt="Linkedin Icon"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>

                    <div className="image">
                        <a href="https://github.com/Joakim-Andersson" target="_blank">
                            <Image
                                src="/github-sign.png"
                                alt="Github Icon"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>

                    <div className="image">
                        <a href="mailto:jjoakimm@hotmail.com">
                            <Image
                                src="/mail-bl.png"
                                alt="Instagram Icon"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </nav>
    )
}