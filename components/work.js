import Image from "next/image"

export default function Work() {
    return (
        <section id="work" className="work">
            <ul className="work__projects">
                <li className="work__projects-li">
                        <Image
                            src="/seasonalprod.jpg"
                            alt="button for closing the menu"
                            width={800}
                            height={600}
                            layout="intrinsic"

                        />
                        <p>text </p>
                        <div className="colored-circle"></div>
                </li>
            </ul>
        </section>
    )
}