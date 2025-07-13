
import { useNavigate } from 'react-router-dom';
import './home.css'
import './mediaqueries.css'
import Nav from '../component/nav/Nav.js';
import CSDomain from '../component/Functions/CS_Domain.js';
import Resume from '../assets/Jordan_Reid_Resume.pdf';
import {  jordan_headshot, jordan_pic2,} from '../assets/assets_export.js';
import { THM_Icon, paper_stack, cyber_security} from '../assets/assets_export.js';
import {
  github_icon,
  linkedin_icon,
  experience_icon,
  arrow_icon,
  education_icon,
  email_icon} from '../assets/assets_export.js'

function Home() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
    <Nav/>
    
    <section id="profile">
      <div className="Box">  
        <div className="box__section__pic-container">  
          <div className="section__pic-container">
            <img 
              src={jordan_headshot} 
              alt="Jordan's headshot" 
            />
          </div>
        </div>  
        <div className="box__section__text">
          <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jordan Reid</h1>
          <p className="section__text__p2">CyberSecurity Data Analyist</p>
          <div className="btn-container">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-color-2"
              aria-label="Download CV (PDF)"
            >
              Download CV
            </a>
            <button className="btn btn-color-1" onClick={() => { window.location.href='./#contact'; }}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin_icon}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => { window.location.href='https://www.linkedin.com/in/jordan-reid-598032245'; }}
              style={{ cursor: "pointer" }}
            />
            <img
              src={github_icon}
              alt="My Github profile"
              className="icon"
              onClick={() => { window.location.href='https://github.com/JordanMReid'; }}
              style={{ cursor: "pointer" }}
            />
          </div>
          </div>
        </div>
      </div>  
    </section>
    
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
          <p>Hello, my name is Jordan Reid. I live in Winchester, MA, a suburban city just outside Boston.
             From an early age, I’ve been captivated by technology, and I’m excited to bring my passion into the ever-evolving tech industry. Below,
            you’ll find details about my education and professional experience.</p>
        <div className="about__pic-container">
          <img
            src={jordan_pic2}
            alt="Jordan's headshot"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experience_icon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Cyber Security</p>
            </div>
            <div className="btn btn-color-2 details-container"
             onClick={() => 
                {navigate('/Certs'); }} 
                style={{ cursor: 'pointer' }}>
              <img
                src={education_icon}
                alt="Education icon"
                className="icon"
              />
              <h3>Certifications</h3>
              <p>Take a look at my Certs</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Over the past two years, I’ve been actively learning and practicing
              programming languages including HTML, CSS, Python, and JavaScript.
              About a year ago, I began focusing on cybersecurity and exploring its
              critical role in today’s digital landscape. Through platforms such as
              Google’s Cybersecurity Certificate, TryHackMe, and CompTIA, I’ve developed
              a strong understanding of key cybersecurity principles — from foundational 
              concepts like the CIA Triad, threats, and vulnerabilities to more advanced
              topics such as malware analysis using tools like PEStudio and Exeinfo PE. 
              To validate and apply my skills, I’ve successfully completed proctored exams 
              and participated in Capture the Flag (CTF) challenges. Additionally, I’ve
              worked within a simulated Security Operations Center (SOC) environment as part
              of TCM Security’s Practical SOC Analyst Assessment (PSAA), gaining hands-on
              experience in monitoring, detection, and incident response. With these skills,
              I’m confident I can be a valuable asset to any team I join.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow_icon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href='./#experience'; }}
        style={{ cursor: "pointer" }}
      />
    </section>

    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Cyber Security</h2>
            <div className="article-container">
              <CSDomain />
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow_icon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href='./#projects'; }}
        style={{ cursor: "pointer" }}
      />
    </section>

    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">

            <div class="details-container color-container">
              <div class="article-container"> 
              </div>
              <h2 class="experience-sub-title project-title">Project One</h2>
                <img
                  src={THM_Icon}
                  alt="TryHackMe icon"
                  class="project-image"
                ></img>
              <div class="btn-container">
                <div className="btn btn-color-2 details-container"
                  onClick={() => 
                  {navigate('/Project_1'); }} 
                  style={{ cursor: 'pointer' }}>
                <img
                  src={education_icon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Try Hack Me Stat</h3>
              </div>
              </div>
            </div>

            <div class="details-container color-container">
              <div class="article-container">
             
              </div>
              <h2 class="experience-sub-title project-title">Project Two</h2>
              <img
                  src={paper_stack}
                  alt="Paper stack icon"
                  class="project-image"
              ></img>    
              <div class="btn-container">
                <div className="btn btn-color-2 details-container"
                  onClick={() => 
                  {navigate('/Project_2'); }} 
                  style={{ cursor: 'pointer' }}>
                <img
                  src={education_icon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Incident Report</h3>
              </div>
              </div>
            </div>
            
            <div class="details-container color-container">
              <div class="article-container"> 
              </div>
              <h2 class="experience-sub-title project-title">Project Three</h2>
              <img
                src={cyber_security}
                alt="Cyber Security icon"
                class="project-image"
              ></img>  
              <div class="btn-container">
                <div className="btn btn-color-2 details-container"
                  onClick={() => 
                  {navigate('/Project_3'); }} 
                  style={{ cursor: 'pointer' }}>
                <img
                  src={education_icon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Rules & scripting</h3>
              </div>
              </div>
            </div>

          </div>
      </div>
      <img
        src={arrow_icon}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>

    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email_icon}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:jordanreid2699@gmail.com">jordanreid2699@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin_icon}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/jordan-reid-598032245"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn
              </a></p>
        </div>
      </div>
    </section>

    <footer>
      <nav id="desktop-nav">
        <div>
          <ul class="nav-links">
            <li><a href="/">profile</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

      
      </nav>
      <p>Copyright &#169; 2023 Jordan Reid. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>         
        </header>
      </div>
    );
  }
  
  export default Home;

  
