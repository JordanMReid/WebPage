import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './project_1.css';
import {
  Foundationaljunior,
  Foundationalmidlv, 
  SecurityAnalystjunior, 
  SecurityAnalystmidlv, 
  SecEngineerjunior, 
  SecEngineermidlv, 
  PenTestjunior 
} from '../../../../assets/assets_export.js';


function Project_1() {
  const navigate = useNavigate();

  
  const [selectedMatrix, setSelectedMatrix] = useState(null);
      const Matrix = [
      { name: "Foundational Knowledge", 
        image: [Foundationaljunior, Foundationalmidlv],},
      
      { name: "Security Analyst", 
        image: [SecurityAnalystjunior, SecurityAnalystmidlv],},
      
      { name: "Security Engineer", 
        image: [SecEngineerjunior, SecEngineermidlv],},
      
      { name: "Penetration Tester", 
        image: [PenTestjunior]},
    ];


  return(
    <div className="BoxEntry">
      <h2>Try Hack Me's</h2>
      <h1>Skill Matrix</h1>
      <p>
        This showcases my progress and achievements on 
         the Try Hack Me platform, where I have completed various cybersecurity
         challenges and learned valuable skills in the field.
      </p>

      <div>
        <button
          className="BackButtonText"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
            const aboutSection = document.getElementById('projects');
            if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
          }, 100);
          }} style={{ cursor: "pointer" }}
        >
          <span>Back</span>
        </button>
      </div>

      <div className="matrix-display">
        <ul className="domain-list">
          {Matrix.map((Matrix, idx) => (
            <li key={idx}>
              <button
                className={`domain-btn ${selectedMatrix === Matrix.name ? 'active' : ''}`}
                onClick={() => setSelectedMatrix(Matrix.name)}
              >
                {Matrix.name}
              </button>
            </li>
          ))}
        </ul>

        <div className={`domain-content ${selectedMatrix ? 'show' : ''}`}>
          {Matrix.map((Matrix, index) =>
            selectedMatrix === Matrix.name ? (
              <div className="tools" key={index}>
                <h4>Progress:</h4>
                <ul>
                  {Matrix.image.map((img, idx) => (
                    <li key={idx}>
                      <img
                        src={img}
                        alt={`${Matrix.name} Level ${idx + 1}`}
                        className="matrix-image"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>

  );
}

export default Project_1;