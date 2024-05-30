import React from "react";
import "../components css/footer.css"

function Footer() {
    return (
        <section id="contact">
            <div className="contact-section">
                <div className="get-in-touch-section">
                    <h3 className="get-in-touch-heading">GET IN TOUCH</h3>
                    <div>
                        <i style={{ color: "#f4b942" }} class="fa-solid fa-location-dot"></i>
                        <p className="get-in-touch-content" style={{ display: "inline", marginLeft: "5px", color: "white", textAlign: "left", maxWidth: "70px !important" }}> Near manju lodge, opp sbi    </p>
                        <p style={{ color: "white", marginLeft: "27px", marginBottom: "0px" }}>bank dharmavaram 515671</p>
                    </div>
                    <div style={{ marginTop: "0px" }}>
                        <i style={{ color: "#f4b942", marginLeft: "0px" }} class="fa-regular fa-envelope"></i>
                        <p style={{ display: "inline", marginLeft: "10px", color: "white", textAlign: "left", maxWidth: "70px !important" }}>rohithchanda7@gmail.com</p>
                    </div>
                    <div style={{ marginTop: "0px" }}>
                        <i style={{ color: "#f4b942", marginLeft: "0px" }} class="fa-solid fa-phone"></i>
                        <p style={{ display: "inline", marginLeft: "10px", color: "white", textAlign: "left", maxWidth: "70px !important" }}>+91 6301703308 (INDIA)</p>
                    </div>
                </div>

                <div className="social-media-links">
                    <button className="social-media-btn"><i style={{ color: "white" }} class="fa-brands fa-linkedin-in"></i></button>
                    <button className="social-media-btn"><i style={{ color: "white" }} class="fa-brands fa-x-twitter"></i></button>
                    <button className="social-media-btn"><i style={{ color: "white" }} class="fa-brands fa-instagram"></i></button>
                    <button className="social-media-btn"><i style={{ color: "white" }} class="fa-brands fa-facebook"></i></button>
                </div>

                <div className="email-form">
                    <h3 className="email-here-heading">Email me here</h3>
                    <input style={{ border: "1px solid white", marginTop: "10px", width: "300px" }} className="email-input-box" type="text" placeholder="enter message"></input>
                    <button style={{ marginTop: "10px", marginLeft: "-45px", width: "250px" }} className="resume-btn">Send message</button>
                </div>

            </div>

        </section>
    )
}

export default Footer;