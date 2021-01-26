import Image from "next/image"

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills__text">
                <p>hello</p>
            </div>
            <div className="skills__image">
                <Image
                    src="/github-sign.png"
                    alt="Github Icon"
                    width={50}
                    height={50}
                    margin={10}
                />
            </div>
        </section>
    )
}