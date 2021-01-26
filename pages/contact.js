import Head from "next/head";
import Image from "next/image"
import React, { useEffect, useState } from "react";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGV5dGhlcmVqb2FraW0iLCJhIjoiY2trY2o4OGZ3MDExazJvcG14aWhyemJvYyJ9.h2SsCAvtnNRvCd_aPM1CjA';

export default function Contact() {
    const [pageIsMounted, setPageIsMounted] = useState(false)

    const [nameField, setNameField] = useState('');
    const [mailField, setMailField] = useState('');
    const [subjectField, setSubjectField] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleOnClick = e => {
        e.preventDefault();
        let booleanMail = validateEmail(mailField);
        if (!booleanMail) {
            setErrorMessage('Please enter valid email!')
        } else {
            setErrorMessage(null)
            // skicka som mail till migi! 
        }
    }

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "contact__map",
            style: "mapbox://styles/heytherejoakim/ckkcitaen2bsu18qvn7wqygor",
            center: [13.91, 60.75],
            zoom: 4.5,
        });
        var marker = new mapboxgl.Marker({
            color: "#ff3232",
        })
            .setLngLat([10.745298, 59.911735])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML('<h1>Hey there from Oslo!</h1> <img src="joakim.png" alt="male working" />'))
            .addTo(map);
    }, [])

    return (
        <div className="contact">
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <section className="contact__info">
                <div className="contact__info-text">
                    <h1>Let's connect!</h1>
                    <section className="contact__info-text-accounts">
                        <div className="contact__info-text-accounts-images">

                        <div className="image">
                                <a href="https://www.linkedin.com/in/joakim-per-oskar-andersson/" target="_blank">
                                    <Image
                                        src="/../public/linkedin.png"
                                        alt="Linkedin Icon"
                                        width={50}
                                        height={50}
                                    />
                                    <p>Linkedin</p>
                                </a>
                            </div>

                            <div className="image">
                                <a href="https://github.com/Joakim-Andersson" target="_blank">
                                    <Image
                                        src="/../public/github-sign.png"
                                        alt="Github Icon"
                                        width={50}
                                        height={50}
                                        margin={10}
                                    />
                                    <p>Github</p>
                                </a>
                            </div>

                            <div className="image">
                                <a href="mailto:jjoakimm@hotmail.com">
                                    <Image
                                        src="/../public/mail-bl.png"
                                        alt="Instagram Icon"
                                        width={50}
                                        height={50}
                                    />
                                    <p>Mail</p>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <form className="contact__info-form">
                    <h4> <strong>Have a question or want to work together? <br /> </strong>
                        Don't hesitate to contact me :) </h4>
                    <label>
                        <input className="inputfield" type="text" name="name" placeholder="Name" onChange={e => setNameField(e.target.value)} />
                    </label>
                    <label>
                        <input className="inputfield" type="text" name="Email" placeholder="Email" required onChange={e => setMailField(e.target.value)} />
                    </label>
                    <label>
                        <input className="inputfield" type="text" name="subject" placeholder="Subject" onChange={e => setSubjectField(e.target.value)} />
                    </label>
                    <label>
                        <textarea className="messagefield" type="text" name="message" placeholder="Message" onChange={e => setMessage(e.target.value)} />
                    </label>
                    {errorMessage && (<p className="contact__info-form--error">{errorMessage}</p>)}
                    <input className="submitbutton" type="submit" value="Send" onClick={(event) => handleOnClick(event)} />
                </form>
            </section>
            <section className="contact__map">
                <div id="contact__map" style={{ height: 800, width: 750 }} />
            </section>
        </div>
    )
}