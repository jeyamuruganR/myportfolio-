import React, { useEffect } from "react";
import "../styles/skills.css";

const skills = {
  frontend: [
    { name: "HTML", icon: "fa-brands fa-html5", level: 95 },
    { name: "CSS", icon: "fa-brands fa-css3-alt", level: 90 },
    { name: "JavaScript", icon: "fa-brands fa-js", level: 88 },
    { name: "React", icon: "fa-brands fa-react", level: 85 },
    { name: "Vite", icon: "fa-solid fa-bolt", level: 80 },
  ],
  backend: [
    { name: "Java", icon: "fa-brands fa-java", level: 92 },
    { name: "Spring Boot", icon: "fa-solid fa-leaf", level: 88 },
    { name: "Python", icon: "fa-brands fa-python", level: 85 },
    { name: "Flask", icon: "fa-solid fa-flask", level: 80 },
    { name: "REST API", icon: "fa-solid fa-link", level: 90 },
  ],
  tools: [
    { name: "Git", icon: "fa-brands fa-git-alt", level: 87 },
    { name: "Docker", icon: "fa-brands fa-docker", level: 82 },
    { name: "Linux", icon: "fa-brands fa-linux", level: 85 },
    { name: "VS Code", icon: "fa-solid fa-code", level: 95 },
    { name: "Postman", icon: "fa-solid fa-paper-plane", level: 88 },
  ],
};

const Skills = () => {
  useEffect(() => {
    // Scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-category").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>

      {Object.entries(skills).map(([category, items]) => (
        <div className="skill-category" key={category}>
          <h2 className="category-title">{category.toUpperCase()}</h2>

          <div className="skills-grid">
            {items.map((skill, index) => (
              <div className="skill-card" key={index}>
                <i className={`skill-icon ${skill.icon}`}></i>
                <p>{skill.name}</p>
                <div className="skill-level">
                  <div 
                    className="level-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Charts Section */}
      <div className="charts-container">
        <div className="chart-section">
          <h3 className="chart-title">Skill Distribution</h3>
          <div className="pie-chart">
            <div className="pie-segment" style={{ transform: 'rotate(108deg)' }}></div>
            <div className="pie-segment" style={{ transform: 'rotate(180deg)' }}></div>
            <div className="pie-segment" style={{ transform: 'rotate(252deg)' }}></div>
            <div className="pie-segment" style={{ transform: 'rotate(306deg)' }}></div>
          </div>
          <div className="pie-legend">
            <div className="legend-item">
              <div className="legend-color frontend"></div>
              <span>Frontend (30%)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color backend"></div>
              <span>Backend (20%)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color tools"></div>
              <span>Tools (20%)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color other"></div>
              <span>Other (15%)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color experience"></div>
              <span>Experience (15%)</span>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <h3 className="chart-title">Skill Growth Over Time</h3>
          <div className="line-chart-container">
            <div className="line-chart">
              <div className="chart-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${i * 20}%` }}></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${i * 20}%` }}></div>
                ))}
              </div>
              
              <svg>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path 
                  className="line-path"
                  d="M10,250 L90,200 L170,150 L250,100 L330,70 L410,40"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
              </svg>
              
              <div className="chart-points">
                {[
                  { x: 10, y: 250, label: '2020' },
                  { x: 90, y: 200, label: '2021' },
                  { x: 170, y: 150, label: '2022' },
                  { x: 250, y: 100, label: '2023' },
                  { x: 330, y: 70, label: '2024' },
                  { x: 410, y: 40, label: '2025' },
                ].map((point, i) => (
                  <div key={i} className="point" style={{ left: `${point.x}px`, top: `${point.y}px` }}>
                    <div className="point-label" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                      {point.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-data-labels">
              <span className="data-label">2020</span>
              <span className="data-label">2021</span>
              <span className="data-label">2022</span>
              <span className="data-label">2023</span>
              <span className="data-label">2024</span>
              <span className="data-label">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;