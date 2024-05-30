import React from "react";
import "../components css/about.css"

function About() {
    return (
        <section id="about">
            <div className="about-section">
                <div className="left-section">
                    <h6 className="about-heading">ABOUT ME</h6>
                    <h3 className="my-heading-1">I'M A WEB DEVELOPER & </h3>
                    <h3 className="my-heading-2">APP DEVELOPER</h3>
                    <span className="headerborder">hello</span>
                </div>
                <div className="right-section">
                    <p className="para1">Hello, I'm Rohith, a passionate and skilled professional in the world of web and mobile application development. With a strong foundation in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I create dynamic and responsive applications.</p>
                    <p className="para2">In addition to my professional experiences, I am well-versed in Android app development, contributingto the ever-evolving mobile landscape. My proficiency in Java, along with my understanding of mobile UI/UX principles, allows me to create robust and user-friendly Android applications.</p>
                    <h6 className="follow-me-heading">FOLLOW ME</h6>
                    <div className="social-media-links">
                        <a className="main-links" href="https://www.linkedin.com/in/rohith-chanda-965a2623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin links"></i></a>
                        <a className="main-links link1" href="https://x.com/RohithChanda1?t=2onjaROgMWRePV15oos06g&s=09"><i class="fa-brands fa-square-x-twitter links"></i></a>
                        <a className="main-links link1" href="https://www.instagram.com/chanda_rohith_?utm_source=qr&igsh=M3U1cTh6ZDdnZnQ2"><i class="fa-brands fa-square-instagram links"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;