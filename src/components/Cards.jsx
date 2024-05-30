import React from "react";
import "../components css/cards.css"
import img1 from "../resources/product-design.png"
import img3 from "../resources/web-design.png"
import img2 from "../resources/graphic-design.png"


function Cards() {
    return (
        <div className="card-container">
            <div className="card">
                <img className="card-img" src={img1} alt="app develpoment img"/>
                <h3 className="card-heading">App development</h3>
                <p className="card-content">Rhoncus est pellentesque elit ullamcorper dignissim.</p>
                <button className="arrow-btn"><i class="fa-solid fa-arrow-right icon"></i></button>
            </div>
            <div className="card special-card">
                <img className="card-img" src={img3} alt="app develpoment img"/>
                <h3 className="card-heading special-card-heading">Web development</h3>
                <p className="card-content special-card-content">Rhoncus est pellentesque elit ullamcorper dignissim.</p>
                <button className="arrow-btn special-card-btn"><i class="fa-solid fa-arrow-right icon"></i></button>
            </div>
            <div className="card">
                <img className="card-img img3" src={img2} alt="app develpoment img"/>
                <h3 className="card-heading">DSA</h3>
                <p className="card-content">Rhoncus est pellentesque elit ullamcorper dignissim.</p>
                <button className="arrow-btn"><i class="fa-solid fa-arrow-right icon"></i></button>
            </div>
        </div>
    )
}

export default Cards;