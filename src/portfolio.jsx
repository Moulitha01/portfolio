import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Code,
  Award,
  Github,
  Linkedin,
  Mail,
  Briefcase
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current.classList.add("show");
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="portfolio">

      {/* Cursor Glow */}
      <div className="cursor-glow" style={{ top: mouse.y, left: mouse.x }} />

      {/* Navbar */}
      <nav className="navbar">
        <h1>PORTFOLIO</h1>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section ref={heroRef} className="hero">
        <h2>
          Hi, I’m <span>Moulitha C</span>
        </h2>

        <p className="hero-sub">
          Machine Learning Enthusiast ·Cybersecurity Enthusiast · Engineering Student · Fullstack Developer
        </p>

        <p className="hero-desc">
         Driven by an interest in cybersecurity, machine learning, and full-stack development, with hands-on experience in understanding security fundamentals, designing user-centric interfaces using Figma, and building end-to-end web applications. Actively exploring how intelligent models, secure systems, and intuitive design come together in real-world software.
        </p>

        <div className="social-links">
         <a
  href="https://www.linkedin.com/in/moulitha-chandrasekar-8046522a5"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin />
</a>

<a
  href="https://github.com/Moulitha01"
  target="_blank"
  rel="noopener noreferrer"
>
  <Github />
</a>

<a href="mailto:moulithac@email.com">
  <Mail />
</a>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark">
        <h3>Skills</h3>

        <div className="card-grid">
          <div className="card">
            <Code />
            <h4>Languages</h4>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="card">
            <Code />
            <h4>Frameworks</h4>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>React</li>
            </ul>
          </div>

          <div className="card">
            <Code />
            <h4>Developer Tools</h4>
            <ul>
              <li>Git</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="card">
            <Code />
            <h4>Soft Skills</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h3>Experience</h3>

        <div className="experience-card">
          <Briefcase />
          <div>
            <h4>Machine Learning Intern</h4>
            <span>DRDO</span>
            <p>
             Gained hands-on exposure to machine learning fundamentals including linear and polynomial regression, classification models, regularization techniques, and neural network architectures such as FFNN and CNN, along with data preprocessing and model evaluation on real-world datasets.
            </p>
          </div>
        </div>

        <div className="experience-card">
          <Briefcase />
          <div>
            <h4>Python Intern</h4>
            <span>CodeAlpha</span>
            <p>
              Developed Python-based solutions, implemented algorithms from
              scratch, and gained hands-on experience in writing optimized,
              production-ready code.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
<section id="projects" className="section dark">
  <h3>Projects</h3>

  {/* Project 1 */}
  <div className="project-card">
    <div className="project-header">
      <Cpu />
      <a
        href="https://github.com/Moulitha01/linear_polynomial_regression"
        target="_blank"
        rel="noopener noreferrer"
        className="project-git"
        aria-label="GitHub Repository"
      >
        <Github />
      </a>
    </div>

    <h4>Linear & Polynomial Regression</h4>
    <p>
      Implemented linear and polynomial regression from scratch using
      design matrix and pseudo-inverse formulation. Evaluated performance
      using MSE and RMSE and visualized results with Matplotlib.
    </p>
    <span>NumPy · Pandas · Matplotlib</span>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <div className="project-header">
      <Cpu />
      <a
        href="https://github.com/Moulitha01/regularizrd_regression"
        target="_blank"
        rel="noopener noreferrer"
        className="project-git"
        aria-label="GitHub Repository"
      >
        <Github />
      </a>
    </div>

    <h4>Ridge Polynomial Regression</h4>
    <p>
      Built multivariate polynomial regression with Ridge (L2)
      regularization using closed-form solutions. Designed the feature
      matrix, evaluated training/testing MSE, and visualized 3D surfaces.
    </p>
    <span>NumPy · Pandas · Matplotlib · itertools</span>
  </div>

  {/* Project 3 */}
  <div className="project-card">
    <div className="project-header">
      <Cpu />
      <a
        href="https://github.com/Moulitha01/bird_drone_classification"
        target="_blank"
        rel="noopener noreferrer"
        className="project-git"
        aria-label="GitHub Repository"
      >
        <Github />
      </a>
    </div>

    <h4>Bird vs Drone Image Classification</h4>
    <p>
      Developed a CNN using PyTorch with data augmentation, batch
      normalization, adaptive pooling, GPU acceleration, and learning rate
      scheduling. Visualized predictions with confidence metrics.
    </p>
    <span>PyTorch · Matplotlib</span>
  </div>

  {/* Project 4 */}
  <div className="project-card">
    <div className="project-header">
      <Cpu />
      <a
        href="https://github.com/Moulitha01/fashion_mnist"
        target="_blank"
        rel="noopener noreferrer"
        className="project-git"
        aria-label="GitHub Repository"
      >
        <Github />
      </a>
    </div>

    <h4>Fashion-MNIST Classification</h4>
    <p>
      Designed and trained a deep CNN on a custom subset of Fashion-MNIST,
      achieving high accuracy using optimized architecture, normalization,
      and Adam optimization.
    </p>
    <span>PyTorch</span>
  </div>
</section>


      {/* Contact */}
<section id="contact" className="section contact">
  <h3>Contact</h3>
  <p>Open to internships, research, and collaborations</p>
  
  <div className="contact-links">
    <p>
      Email: <a href="mailto:moulithac@email.com">moulithac@email.com</a>
    </p>
    <p>
      Phone: <a href="tel:+918790110850">+91 8790110850</a>
    </p>
  </div>
</section>


    </div>
  );
};

export default Portfolio;
