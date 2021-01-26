import Image from "next/image"

export default function About() {
    return (
        <section className="about">
            <div className="about__text">
                <div class="giant-quotes-quote">
                    <blockquote>
                        <h3>I enjoy building apps, solving problems and learning new technologies along the way.
                        </h3>
                    </blockquote>
                </div>
                <h2> Hey, I'm Joakim.</h2>
            </div>
            <div className="about__image">
                <Image
                    src="/../public/joakim.png"
                    alt="Linkedin Icon"
                    width={500}
                    height={500}
                    class
                />
            </div>
        </section>
    )
}