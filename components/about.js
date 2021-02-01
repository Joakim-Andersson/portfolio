import Image from "next/image"
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about__text">
                <blockquote>
                    <h2>Digitally talented with a natural ability to get things done.</h2>
                </blockquote>
                <h3>About me</h3>
                <p>
                    I'm Joakim, a Full-stack developer with a background in Marketing and E-commerce.
                    I enjoy building apps, solving problems and learning new technologies along the way.
                    </p>
                <p>
                    Based in Oslo, Norway, but originally from Sweden. Right now working as a consultant at <a href="https://salt.study/" target="_blank"> {`<SALT/>`} </a> School of Applied Technology.
                    I'm excited to make a difference in this industry!
                </p>
            </div>
            <div className="about__image">
                <Image
                    src="/joakim.png"
                    alt="Linkedin Icon"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}