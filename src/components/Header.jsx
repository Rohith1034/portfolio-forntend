import React from "react";
import "../components css/header.css"

function Header() {
    return (
        <div>
            <div className="header">
                <h1 className="header-main-heading">Hello</h1>
                <h3 className="sub-heading">I AM WEB DESIGNER</h3>
                <div className="email">
                    <input type="email" className="email-input-box" placeholder="Email"></input>
                    <button type="submit" className="resume-btn">GET MY RESUME</button>
                </div>
            </div>
        </div>
    )
}

export default Header;