import React from "react";
import "../components css/Header Decoration.css"
import img1 from "../resources/circle-shadow.png"
import img2 from "../resources/square.png"

function HeaderDecoration() {
    return (
        <div className="header-decoration">
            <img className="img1" src={img1} alt="circle-shawdow" />
            <img className="img2" src={img2} alt="square-shawdow" />
        </div>
    )
}

export default HeaderDecoration;