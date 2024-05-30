import React from "react";
import "../components css/recentProjects.css"
import img1 from "../resources/Screenshot 2024-05-28 221720.png"
import img2 from "../resources/Screenshot 2024-05-28 222540.png"
import img3 from "../resources/Screenshot 2024-05-28 222758.png"
import img4 from "../resources/Ecommerce Mobile App UI Kit.jpg"
import img5 from "../resources/Frame 302.png"
import img6 from "../resources/2bcb495162d2eeab782a98efe90d7b0d.jpg"

function RecentProjects() {
    return (
        <section id="projects">
            <div className="project-section">
                <h3 className="project-heading">Recent Work</h3>
                <div className="project-container">
                    <div className="project-card">
                        <div className="img-container">
                            <img className="project-img" src={img1} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Grocery Store</h3>
                        <p className="project-card-content">Web development</p>
                    </div>

                    <div className="project-card">
                        <div className="img-container" style={{ backgroundColor: "#fec10e" }}>
                            <img className="project-img" src={img2} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Restaruant Website</h3>
                        <p className="project-card-content">Web development</p>
                    </div>

                    <div className="project-card">
                        <div className="img-container" style={{ backgroundColor: "#eeeff1" }}>
                            <img className="project-img" src={img3} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Food delivery Website</h3>
                        <p className="project-card-content">Web development</p>
                    </div>

                </div>


                <div className="project-container-1">

                    <div className="project-card">
                        <div className="img-container" style={{ backgroundColor: "#397cff" }}>
                            <img className="project-img" src={img4} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Ecommerce App</h3>
                        <p className="project-card-content">App development</p>
                    </div>

                    <div className="project-card">
                        <div className="img-container" style={{ backgroundColor: "#deebf3" }}>
                            <img className="project-img" src={img5} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Food Recipe app</h3>
                        <p className="project-card-content">App development</p>
                    </div>

                    <div className="project-card">
                        <div className="img-container" style={{ backgroundColor: "#ecf4ff" }}>
                            <img className="project-img" src={img6} alt="Project img" />
                        </div>
                        <h3 className="project-card-heading">Weather forecast app</h3>
                        <p className="project-card-content">App development</p>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default RecentProjects;