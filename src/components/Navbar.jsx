import React from "react";
import "../components css/navbar.css"

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="toggler">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <span className="toggler-heading">PORTFOLIO</span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="home-link nav-link" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#myskills">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">PROJECTS</a>
                        </li>

                        <h1 className="main-heading">
                            <a className="main-heading-link" href="/">PORTFOLIO</a>
                        </h1>

                        <li className="nav-item">
                            <a className="nav-link" href="/">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;