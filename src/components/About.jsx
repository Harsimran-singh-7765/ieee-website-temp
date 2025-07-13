import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>Institute of Electrical and Electronics Engineers</h1>
            <p className="lead">
              Advancing technology for humanity through innovation, education, and collaboration.
            </p>
            <p>
              IEEE is the world's largest technical professional organization dedicated to advancing 
              technology for the benefit of humanity. We inspire a global community of innovators 
              through our publications, conferences, technology standards, and professional activities.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>Innovation</h3>
                <p>Driving technological breakthroughs that shape the future</p>
              </div>
              <div className="feature">
                <h3>Education</h3>
                <p>Providing learning opportunities for engineers worldwide</p>
              </div>
              <div className="feature">
                <h3>Standards</h3>
                <p>Developing global standards for emerging technologies</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" alt="IEEE Technology" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;