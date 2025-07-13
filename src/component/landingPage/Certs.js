import React from 'react';
import { useNavigate } from 'react-router-dom';
import './certs.css';
import { 
  GoogleC_IT,
  GoogleC_CS,
  CompTIA_S_plus,
  THM_Lv1,  
  THM_Lv2,
} from '../../assets/assets_export';
import {
  CompTIA, C_CS, C_IT, SOC_LV1, SOC_LV2
} from '../../assets/assets_export';


function Certs() {
  const navigate = useNavigate();
  return(
    <div className="BoxEntry">
      <h2>Certifications</h2>
      <div>
        <button
          className="BackButtonText"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
          style={{ cursor: "pointer" }}
        >
          <span>Back</span>
        </button>
      </div>

      <div className="Certs">
        <a href={CompTIA} target="_blank" rel="noopener noreferrer" className="pdf-link">
          <img src={CompTIA_S_plus} alt="CompTIA Security+ Certification" className="pdf-icon" />
          <div className="pdf-card">📄 CompTIA Security+ Certification</div>
        </a>
        
        <a href={C_CS} target="_blank" rel="noopener noreferrer" className="pdf-link">
          <img src={GoogleC_CS} alt="Google Coursera CyberSecurity Certification" className="pdf-icon" />
          <div className="pdf-card">📄 Google Coursera CyberSecurity Certification</div>
        </a>
      
        <a href={C_IT} target="_blank" rel="noopener noreferrer" className="pdf-link">
          <img src={GoogleC_IT} alt="Google Coursera IT Certification" className="pdf-icon" />
          <div className="pdf-card">📄 Google Coursera IT Certification</div>
        </a>
      
        <a href={SOC_LV1} target="_blank" rel="noopener noreferrer" className="pdf-link">
          <img src={THM_Lv1} alt="SOC Analyst Level 1" className="pdf-icon" />
          <div className="pdf-card">📄 SOC Analyst Level 1</div>
        </a>
      
        <a href={SOC_LV2} target="_blank" rel="noopener noreferrer" className="pdf-card">
          <img src={THM_Lv2} alt="SOC Analyst Level 2" className="pdf-icon" />
          <div className="pdf-card">📄 SOC Analyst Level 2</div>
        </a>
      </div>
    </div>    
  );
}

export default Certs;