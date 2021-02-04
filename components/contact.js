import Image from "next/image"
import React, { useState } from "react";

import Map from "./map";

export default function Contact() {

    // const [mailField, setMailField] = useState('');
    // const [subjectField, setSubjectField] = useState('');
    // const [message, setMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null)

    // function validateEmail(email) {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // const handleOnClick = e => {
    //     e.preventDefault();
    //     let booleanMail = validateEmail(mailField);
    //     if (!booleanMail) {
    //         setErrorMessage('Please enter valid email!')
    //     } else {
    //         setErrorMessage(null)
    //         // skicka som mail till migi! 
    //     }
    // }

    return (
        <div className="contact">
            <section className="contact__info">
                <div className="contact__info-text">
                    <h1>Let's connect!</h1>
                    <section className="contact__info-text-accounts">
                        <div className="contact__info-text-accounts-images">

                            <div className="image">
                                <a href="https://www.linkedin.com/in/joakim-per-oskar-andersson/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/linkedin.png"
                                        alt="Linkedin Icon"
                                        width={50}
                                        height={50}
                                    />
                                </a>
                                <p>Linkedin</p>
                            </div>

                            <div className="image">
                                <a href="https://github.com/Joakim-Andersson" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/github-sign.png"
                                        alt="Github Icon"
                                        width={50}
                                        height={50}
                                    />
                                </a>
                                <p>Github</p>
                            </div>

                            <div className="image">
                                <a href="mailto:jjoakimm@hotmail.com">
                                    <Image
                                        src="/mail-bl.png"
                                        alt="Instagram Icon"
                                        width={50}
                                        height={50}
                                    />
                                </a>
                                <p>Mail</p>
                            </div>
                        </div>
                    </section>
                </div>
                <form className="contact__info-form">
                    <h4> If you have any questions, or want to work together, 
                        please don't hesitate to get in contact!</h4>
                    {/* <label>
                        <input className="inputfield" type="text" name="Email" placeholder="Email" required onChange={e => setMailField(e.target.value)} />
                    </label>
                    <label>
                        <input className="inputfield" type="text" name="subject" placeholder="Subject" onChange={e => setSubjectField(e.target.value)} />
                    </label>
                    <label>
                        <textarea className="messagefield" type="text" name="message" placeholder="Message" onChange={e => setMessage(e.target.value)} />
                    </label>
                    {errorMessage && (<p className="contact__info-form--error">{errorMessage}</p>)}
                    <input className="submitbutton" type="submit" value="Send" onClick={(event) => handleOnClick(event)} /> */}
                </form>
            </section>
            <div className="contact__map-pic">
                <Image
                    src="/map3.png"
                    alt="map"
                    width={750}
                    height={790}
                />
            </div>
            <section className="contact__map">
                <Map />
            </section>
        </div>
    )
}