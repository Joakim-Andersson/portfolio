import Image from "next/image"
import Link from "next/link";


export default function About() {
    return (
        <section className="about">
            <div className="about__text">
                <div className="giant-quotes-quote">
                    <blockquote>
                        <h3 >I enjoy building apps, solving problems and learning new technologies along the way.
                        </h3>
                        <h2>Hey, I'm Joakim!</h2>
                        <p>
                            Full-stack developer with a background in Digital Marketing and E-commerce.
                            I’m passionate and digitally talented with a natural ability to get things done.
                        </p>
                        <p>
                            Based in Oslo, Norway, but originally from Sweden. Right now working as a consultant at <a href="https://salt.study/"> {`<SALT/>`} </a>, School of Advannced Technology.
                            Among 1500 candidates, myself and 30 others, were selected for a 3 months accelerated career program to become a Full Stack JavaScript developer.
                            Now I am looking forward to making a difference in this industry!
                        </p>
                        <Link href="/contact">
                        <p className="text__end">
                            Would you like to work with me? Fun, let's chat! &rarr;
                        </p>
                        </Link>
                    </blockquote>
                </div>
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