import React from "react";
import Skillsbox from "./Skillsbox"

export default function skills() {
    return (
        <div id="skills" className="skilled">
            <div className="skilled__text">
                <h1> Tech Skills </h1>
                <p>As a Full Stack Developer, I have the opportunity to work in a diverse range of programs and tools from the starting phase of an application to the launch. Here are my preferred tools right now. </p>
                <p className="skilled__text-hide"> I'm always looking to improve and learn new skills - so don't hesitate to tell me about a favorite of yours that's not listed!
                </p>
            </div>
            <div className="skilled__box">
            <Skillsbox />
            </div>
        </div>
    );
}