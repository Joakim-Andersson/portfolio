import React from "react";
import Skillsbox from "./Skillsbox"

export default function skills() {
    return (
        <div id="skills" className="skilled">
            <div className="skilled__text">
                <h1> Tech Skills </h1>
                <p>As a Full Stack Developer, I have the opportunity to work in a diverse range of programs and tools from the starting phase of an application to the launch. Here are my preferred tools right now. </p>
                <p>Being the creative and visual person I am, I do prefer working Front-end. I love creating user friendly experiences and seeing my work come to life. When working Back-end, I strive for optimized code performance and making sure that the data is stored securely. </p>
                <p className="skilled__text-hide"> I'm always looking to improve and learn new skills - so don't hesitate to tell me about a favorite of yours!
                </p>
            </div>
            <div className="skilled__box">
            <Skillsbox />
            </div>
        </div>
    );
}