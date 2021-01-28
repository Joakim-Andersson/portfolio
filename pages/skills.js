import React from "react";
import Skillsbox from "../components/Skillsbox"

export default function skills() {
    return (
        <div className="skilled">
            <div className="skilled__text">
                <h1> Skills </h1>
                <p>As a fullstack developer, I have the opportunity to work in a diverse range of programs and tools from the starting phase of an application to the launch. Here are the tools I'm using right now in my everyday work. </p>
                <p> I'm always looking to improve and learn new skills - so don't hesitate to tell me about a favorite of yours that's not listed!
                </p>
            </div>
            <div className="skilled__box">
            <Skillsbox />
            </div>
        </div>
    );
}