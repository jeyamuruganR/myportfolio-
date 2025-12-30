import React from "react";
import "../styles/education.css";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institute: "Anna University",
    year: "2019 – 2022",
    details: "Software Development, DSA, DBMS, Web Technologies",
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "Government Polytechnic College",
    year: "2016 – 2019",
    details: "Programming, Computer Networks, Operating Systems",
  },
  {
    degree: "Higher Secondary Education",
    institute: "State Board",
    year: "2014 – 2016",
    details: "Mathematics, Physics, Computer Science",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h1 className="education-title">Education</h1>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-header">
              <i className="fa-solid fa-graduation-cap edu-icon"></i>
              <span className="edu-year">{edu.year}</span>
            </div>

            <h2>{edu.degree}</h2>
            <h3>{edu.institute}</h3>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
