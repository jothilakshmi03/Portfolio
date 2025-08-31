import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "LOAN MANAGEMENT SYSTEM",
      desc: "• Description: Developed a comprehensive Loan Management System using MySQL to automate and streamline loan application processing, customer data management, and loan status tracking.",
      tech: ["MySQL", "SQL Queries", "Triggers", "Stored Procedures"],
      link: "https://github.com/jothilakshmi03/Loan-management-system.git",
    },
    {
      id: 2,
      title: "SENTINAL - WILDLIFE WARNING SYSTEM",
      desc: "• Description: Design and implement a reliable, cost-effective safety system for tribal communities in remote mountainous regions, which detects wild animal threats and provides early alerts.",
      tech: ["React", "HTML", "CSS", "JavaScript", "Node.js"],
      link: "https://github.com/jothilakshmi03/Emergency-response-alert",
    },
    {
      id: 3,
      title: "QUIZ APPLICATION (SPRING BOOT)",
      desc: "• Description: Built a quiz application that allows users to answer multiple-choice questions, automatically evaluates responses, and generates scores through REST APIs.",
      tech: ["Java", "Spring Boot", "MySQL", "Restful APIs"],
      link: "https://github.com/jothilakshmi03/Quiz-application",
    },
  ];

  function scrollTo(ref) {
    setMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="app-wrapper bg-dark text-light">
      {/* NAV */}
      <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Jothilakshmi C
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-light"
                  onClick={() => scrollTo(aboutRef)}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-light"
                  onClick={() => scrollTo(skillsRef)}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-light"
                  onClick={() => scrollTo(projectsRef)}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-light"
                  onClick={() => scrollTo(resumeRef)}
                >
                  Resume
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollTo(contactRef)}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="pt-5">
        {/* HERO */}
        <section className="container-fluid py-5 mt-5 d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold">
              <p>Jothilakshmi C</p> Full Stack Developer
            </h1>
            <p className="lead">
              To be associated with a dynamic and growth-oriented organization
              where I can apply my skills, adapt to new challenges, and build a
              rewarding career.
            </p>
            <div className="d-flex gap-3 mt-3">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo(projectsRef)}
              >
                View my work
              </button>
              <button
                className="btn btn-outline-light"
                onClick={() => scrollTo(resumeRef)}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="Portfolio/jothi.jpg"
              alt="profile"
              className="img-fluid rounded shadow"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section
          ref={aboutRef}
          className="container-fluid py-5 border-top border-secondary"
        >
          <h2>About Me</h2>
          <p>
            I’m a passionate <strong>Full Stack Developer</strong> with
            expertise in building scalable, user-friendly web applications. I
            enjoy solving complex problems, optimizing performance, and bringing
            creative ideas to life through clean, maintainable code.
          </p>
        </section>

        {/* SKILLS */}
        <section
          ref={skillsRef}
          className="container-fluid py-5 bg-dark text-light"
        >
          <div className="container">
            <h2 className="mb-4 fw-bold text-center">Skills</h2>

            <div className="row">
              {/* Web Technologies */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">Web Technologies</h4>
                  {["HTML5", "CSS3", "JavaScript"].map((tech) => (
                    <div
                      key={tech}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">Frameworks & Libraries</h4>
                  {["React.js", "Spring Boot", "Bootstrap"].map((fw) => (
                    <div
                      key={fw}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {fw}
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases & Tools */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">Databases & Tools</h4>
                  {[
                    "MySQL",
                    "GitHub",
                    "IntelliJ",
                    "Visual Studio Code",
                    "MySQL WorkBench",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">Programming Languages</h4>
                  {[
                    "Java",
                    "C",
                    "JavaScript",
                    "OOPs",
                    "Data Structures & Algorithms",
                  ].map((lang) => (
                    <div
                      key={lang}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Architecture & Design */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">
                    Software Architecture & Design
                  </h4>
                  {["Microservices", "MVC Architecture"].map((arch) => (
                    <div
                      key={arch}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="col-md-4 mb-4">
                <div className="p-3 border border-secondary rounded h-100">
                  <h4 className="text-primary mb-3">Soft Skills</h4>
                  {[
                    "Adaptability",
                    "Prioritization",
                    "Communication skills",
                    "Vibe Coding",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="mb-2 p-2 bg-secondary rounded text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          ref={projectsRef}
          className="container-fluid py-5 bg-dark text-light"
        >
          <div className="container">
            <h2 className="mb-4 fw-bold text-center">Projects</h2>
            <div className="row">
              {projects.map((p) => (
                <div key={p.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card bg-secondary text-light h-100 shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{p.title}</h5>
                      <p className="card-text">{p.desc}</p>
                      <ul className="list-unstyled small">
                        {p.tech.map((t, idx) => (
                          <li key={idx}>• {t}</li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <a
                          href={p.link}
                          className="btn btn-outline-light btn-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* RESUME */}
        <section ref={resumeRef} className="container-fluid py-5 text-center">
          <h2>Resume</h2>
          <p className="mt-2">Download or view my resume below.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a
              href="/Portfolio/Jothilakshmi_Resume.pdf"
              download="Jothilakshmi_Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a
              href="/Portfolio/Jothilakshmi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              View Resume
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section
          ref={contactRef}
          className="container-fluid py-5 text-center text-white"
        >
          <h2>Contact Me</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:cjothilakshmi2003@gmail.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              cjothilakshmi2003@gmail.com
            </a>
          </p>
          <p>Villupuram, Tamilnadu, India</p>

          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/jothilakshmi-c-738842325"
              className="text-white"
              style={{ fontSize: "1.25rem", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/jothilakshmi03"
              className="text-white"
              style={{ fontSize: "1.25rem", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
