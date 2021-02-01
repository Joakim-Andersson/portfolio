import Head from "next/head";
import React, { useEffect } from "react";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiaGV5dGhlcmVqb2FraW0iLCJhIjoiY2trY2o4OGZ3MDExazJvcG14aWhyemJvYyJ9.h2SsCAvtnNRvCd_aPM1CjA';

export default function Map() {

    useEffect(() => {
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
        <div className="map">
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <div id="contact__map" style={{ height: 800, width: 700 }} />
        </div>
    )
}