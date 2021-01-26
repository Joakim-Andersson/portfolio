import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="navbar">
                <Link href="/">
                    <h1>Joakim</h1>
                </Link>
                <section className="navbar__contact">
                    <div className="navbar__images">
                        <div className="image">
                            <a href="https://www.linkedin.com/in/joakim-per-oskar-andersson/" target="_blank">
                                <Image
                                    src="/../public/linkedin.png"
                                    alt="Linkedin Icon"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </div>

                        <div className="image">
                            <a href="https://github.com/Joakim-Andersson" target="_blank">
                                <Image
                                    src="/../public/github-sign.png"
                                    alt="Github Icon"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </div>

                        <div className="image">
                            <a href="mailto:jjoakimm@hotmail.com">
                                <Image
                                    src="/../public/mail-bl.png"
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