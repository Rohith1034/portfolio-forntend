import React from "react";
import "../components css/myskills.css";

function Myskills() {
    return (
        <section id="myskills">
            <div style={{ marginTop: "%" }}>
                <h3 className="myskills-heading" style={{ display: "flex", justifyContent: "center" }}>My Skills</h3>

                <div className="myskills-card-container">
                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">WEB DESIGN</h3>
                        <p className="myskill-card-content">Proficient in creating visually appealing and user-friendly web interfaces. Skilled in leveraging design tools, frameworks, and responsive design principles to enhance user experience.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">VALID HTML CODE</h3>
                        <p className="myskill-card-content">Expertise in writing clean, semantic, and standards-compliant HTML code to ensure accessibility, maintainability, and cross-browser compatibility.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">App Development</h3>
                        <p className="myskill-card-content">Experienced in building scalable and efficient mobile and web applications. Adept at leveraging modern frameworks and tools to deliver high-quality software solutions.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Databases</h3>
                        <p className="myskill-card-content">Knowledgeable in designing, implementing, and managing databases. Skilled in SQL and NoSQL databases, optimizing queries, and ensuring data integrity and security.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">Java Programming</h3>
                        <p className="myskill-card-content">Strong foundation in Java programming for building robust, object-oriented applications. Familiar with frameworks like Spring and Hibernate for enterprise-level development.</p>
                    </div>

                    <div className="myskill-card">
                        <button className="right-btn"><i className="fa-solid fa-check right-icon"></i></button>
                        <h3 className="myskill-card-heading">C++ Programming</h3>
                        <p className="myskill-card-content">Proficient in C++ for system-level programming, algorithm design, and performance-critical applications. Experienced in utilizing advanced concepts like pointers, memory management, and STL.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Myskills;
