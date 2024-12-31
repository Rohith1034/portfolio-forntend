import React from "react";
import "../components css/myskills.css";

function Experience() {
    return (<section id="experience">
        <div style={{ marginTop: "11%" }}>
                <h3 className="myskills-heading" style={{ display: "flex", justifyContent: "center" }}>Experience</h3>

                <div className="myskills-card-container">
                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">BTCO Starters Android Developer</h3>
                        <p className="myskill-card-content">
                        As a BTCostarters Android App Developer, I specialize in creating feature-rich and user-friendly Android applications tailored to meet the needs of clients and end-users.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Bhaukaal Studios Mern Developer</h3>
                        <p className="myskill-card-content">
                        As a MERN Developer at Bhaukaal Studios, I specialize in crafting dynamic and high-performance web applications using the MERN stack
                        </p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Jurident Frontend Developer</h3>
                        <p className="myskill-card-content">
                        As a MERN Developer at Jurident, I specialize in developing robust and user-centric web applications tailored to the legal and compliance industry.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Ethnus Mern Developer</h3>
                        <p className="myskill-card-content">
                        I focused on developing intuitive and responsive front-end interfaces with React.js, creating secure and efficient APIs with Node.js and Express.js.</p>
                    </div>
                </div>
            </div>
    </section>)
}

export default Experience;