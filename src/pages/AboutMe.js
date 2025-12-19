import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Me</h1>
        <p>Photographer. Developer. Creative Problem Solver.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>👋 Hello!</h2>
          <p>
            I'm a passionate photographer and computer scientist who loves combining
            creativity with technology. My journey spans from capturing stunning visuals
            to building innovative software solutions.
          </p>
        </div>

        <div className="about-section">
          <h2>📸 Photography Journey</h2>
          <p>
            I've been passionate about photography for several years, specializing in
            landscape, portrait, and urban photography. I believe every photograph tells
            a unique story, and I strive to capture moments that evoke emotion and wonder.
          </p>
        </div>

        <div className="about-section">
          <h2>💻 Technical Background</h2>
          <p>
            As a computer science enthusiast, I enjoy working on challenging projects
            that push the boundaries of what's possible. My expertise includes web
            development, machine learning, and software architecture.
          </p>
        </div>

        <div className="about-section">
          <h2>🎯 Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Photography</h3>
              <ul>
                <li>Landscape Photography</li>
                <li>Portrait Photography</li>
                <li>Photo Editing (Lightroom, Photoshop)</li>
                <li>Composition & Lighting</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Programming</h3>
              <ul>
                <li>JavaScript / React</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📫 Get In Touch</h2>
          <p>
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-btn">Email</a>
            <a href="https://github.com/yourusername" className="contact-btn">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="contact-btn">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
