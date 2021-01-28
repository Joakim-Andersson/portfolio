import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"


export default function Skillsbox() {

    return (
        <div className="skillsbox">
        <div className="skills__headers">

            <h1 className="skills__headers-text Frontend">Frontend</h1>
            <h1 className="skills__headers-text Backend">Backend</h1>
            <h1 className="skills__headers-text Tools">Tools</h1>

            <div className="skills__icons-box CSS">
                <Image
                    src="/icons/CSS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> CSS</p>
            </div>

            <div className="skills__icons-box Figma">
                <Image
                    src="/icons/Figma.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Figma</p>
            </div>

            <div className="skills__icons-box HTML">
                <Image
                    src="/icons/HTML.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> HTML</p>
            </div>

            <div className="skills__icons-box Git">
                <Image
                    src="/icons/Git.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Git</p>
            </div>

            <div className="skills__icons-box GraphQL">
                <Image
                    src="/icons/GraphQL.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> GraphQL</p>
            </div>

            <div className="skills__icons-box Heroku">
                <Image
                    src="/icons/Heroku.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Heroku</p>
            </div>

            <div className="skills__icons-box NodeJS">
                <Image
                    src="/icons/NodeJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> NodeJS</p>
            </div>

            <div className="skills__icons-box MongoDB">
                <Image
                    src="/icons/MongoDB.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> MongoDB</p>
            </div>

            <div className="skills__icons-box Photoshop">
                <Image
                    src="/icons/Photoshop.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Photoshop</p>
            </div>

            <div className="skills__icons-box PostgresQL">
                <Image
                    src="/icons/PostgresQL.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> PostgresQL</p>
            </div>

            <div className="skills__icons-box React">
                <Image
                    src="/icons/React.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> React</p>
            </div>

            <div className="skills__icons-box Redux">
                <Image
                    src="/icons/Redux.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Redux</p>
            </div>

            <div className="skills__icons-box REST">
                <Image
                    src="/icons/REST.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> REST</p>
            </div>

            <div className="skills__icons-box VSC">
                <Image
                    src="/icons/VSC.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> VSC</p>
            </div>

            <div className="skills__icons-box Webpack">
                <Image
                    src="/icons/Webpack.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Webpack</p>
            </div>

            <div className="skills__icons-box Hubspot">
                <Image
                    src="/icons/Hubspot.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Hubspot</p>
            </div>

            <div className="skills__icons-box NextJS">
                <Image
                    src="/icons/NextJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> NextJS</p>
            </div>

            <div className="skills__icons-box ExpressJS">
                <Image
                    src="/icons/ExpressJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> ExpressJS</p>
            </div>
        </div>

    </div>
    )
}