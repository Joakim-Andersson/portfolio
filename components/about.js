import Image from "next/image"

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
                    I enjoy building apps, solving problems and learning new technologies.
                    </p>
                <p>
                  Originally from Sweden, I am currently based in Oslo Norway, working as a consultant <a href="https://salt.study/" target="_blank"> {`</SALT>`} </a> School of Applied Technology.
                 finding tailored solutions for my clients' challenges.
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