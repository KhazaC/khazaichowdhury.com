import React from 'react';
import './ComputerScience.css';

function ComputerScience() {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Web Application',
      description: 'A full-stack web application built with React and Node.js featuring user authentication and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#'
    },
    {
      id: 2,
      title: 'Machine Learning Model',
      description: 'Developed a machine learning model for image classification with 95% accuracy using TensorFlow.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
      github: '#'
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Cross-platform mobile application for task management with offline support and cloud sync.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#'
    },
    {
      id: 4,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time analytics and custom charts.',
      technologies: ['D3.js', 'React', 'PostgreSQL'],
      github: '#'
    }
  ];

  return (
    <div className="cs-page">
      <div className="page-header">
        <h1>Computer Science Projects</h1>
        <p>Software development, algorithms, and technical innovations</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.github} className="project-link">View on GitHub →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComputerScience;
