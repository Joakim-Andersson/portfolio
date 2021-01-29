import Image from "next/image"
import Link from "next/link";

export default function About() {
    return (
        <section className="about">
            <div className="about__text">
                <blockquote>
                    <h2 >I enjoy building apps, solving problems and learning new technologies along the way.
                        </h2>
                </blockquote>
                <h3>About me</h3>
                <p>
                    I'm Joakim, a Full-stack developer with a background in Digital Marketing and E-commerce.
                   Digitally talented with a natural ability to get things done.
                    </p>
                <p>
                    Based in Oslo, Norway, but originally from Sweden. Right now working as a consultant at <a href="https://salt.study/" target="_blank"> {`<SALT/>`} </a> School of Applied Technology.
                            Among 1500 candidates, I was one of 30 to be selected for a 3 months accelerated career program to become a Full Stack JavaScript developer.
                            Now I am eager to make a difference in this industry!
                        </p>
                <Link href="/contact">
                    <p className="text__end">
                        Would you like to work with me? <br/> Fun, let's chat! (make button) &rarr;
                        </p>
                </Link>
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