import React from "react";
import "../components css/myskills.css"

function Myskills() {
    return (
        <section id="myskills">
            <div style={{ marginTop: "11%" }}>
                <h3 className="myskills-heading" style={{ display: "flex", justifyContent: "center" }}>My Skills</h3>

                <div className="myskills-card-container">
                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">WEB DESIGN</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">VALID HTML CODE</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">App development</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>


                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">databases</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>


                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Java programming</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i class="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">C++ programming</h3>
                        <p className="myskill-card-content">Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Myskills