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
                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                <Image
                    src="/icons/CSS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> CSS</p>
                </a>
            </div>

            <div className="skills__icons-box Figma">
                <a href="https://www.figma.com/about/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Figma.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Figma</p>
                </a>
            </div>

            <div className="skills__icons-box HTML">
                <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/HTML.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> HTML</p>
                </a>
            </div>

            <div className="skills__icons-box Git">
                <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Git.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Git</p>
                </a>
            </div>

            <div className="skills__icons-box GraphQL">
                <a href="https://en.wikipedia.org/wiki/GraphQL" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/GraphQL.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> GraphQL</p>
                </a>
            </div>

            <div className="skills__icons-box Heroku">
                <a href="https://en.wikipedia.org/wiki/Heroku" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Heroku.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Heroku</p>
                </a>
            </div>

            <div className="skills__icons-box NodeJS">
                <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/NodeJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> NodeJS</p>
                </a>
            </div>

            <div className="skills__icons-box MongoDB">
            <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/MongoDB.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> MongoDB</p>
                </a>
            </div>

            <div className="skills__icons-box Photoshop">
                <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Photoshop.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Photoshop</p>
                </a>
            </div>

            <div className="skills__icons-box PostgreSQL">
                <a href="https://en.wikipedia.org/wiki/PostgreSQL" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/PostgreSQL.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> PostgreSQL</p>
                </a>
            </div>

            <div className="skills__icons-box React">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/React.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> React</p>
                </a>
            </div>

            <div className="skills__icons-box Redux">
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Redux.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Redux</p>
                </a>
            </div>

            <div className="skills__icons-box REST">
                <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/REST.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> REST</p>
                </a>
            </div>

            <div className="skills__icons-box VSC">
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/VSC.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> VSC</p>
                </a>
            </div>

            <div className="skills__icons-box Webpack">
                <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Webpack.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Webpack</p>
                </a>
            </div>

            <div className="skills__icons-box Hubspot">
                <a href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/Hubspot.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> Hubspot</p>
                </a>
            </div>

            <div className="skills__icons-box NextJS">
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/NextJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> NextJS</p>
                </a>
            </div>

            <div className="skills__icons-box ExpressJS">
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/icons/ExpressJS.png"
                    alt="CSS logo"
                    width={40}
                    height={40}
                />
                <p className="skills__icons-boxtext"> ExpressJS</p>
                </a>
            </div>
        </div>

    </div>
    )
}