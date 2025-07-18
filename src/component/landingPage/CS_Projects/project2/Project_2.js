import React, { useLayoutEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './project_2.css';


function Project_2() {
    const navigate = useNavigate();
    
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
      }, []
    );
    
  return(
    <div>

      <div className="BoxEntry">
        <h1>Incident Report</h1>
      </div>
      
      <div className="BoxEntry">
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

      <section className="AttackSenario">

        <h2>Attack Senairio</h2>
        <h3>Credential Dumping Leading to Lateral Movement </h3>
        <p>
          An attacker gains initial access through a phishing email, uses Mimikatz to dump credentials, and moves laterally across the network using Remote Desktop Protocol (RDP) and PsExec. They exfiltrate sensitive HR files to an external FTP server. 
          The attack is detected by the security team through unusual network activity and file access patterns.
        </p>
        
          <h3>Tools & Methods Used</h3>
        <div className="about-containers">
            <div className="details-container color-container">
              <h4>DEtection & Investigation:</h4>
              <ul> 
                <li>SIEM (e.g. Splunk)</li>
                <li>EDR (e.g. Sigma-Based tool, Auroura)</li>
                <li>Remote Desktop Protocol (RDP)</li>
                <li>Packet Capture (Zeek)</li>
                <li>Sysmon + Event Logs</li> 
                <li>VisusTotal / Hybrid Analysis</li>
              </ul>
            </div>
    
            <div className="details-container color-container">
            <h4>Containment & Eradication:</h4>
              <ul> 
                <li>Disable compromised accounts </li>
                <li>Isolate infected endpoints from network </li>
                <li>Block outbound FTP on firewall</li>
                <li>Remove persistence mechanisms </li>
                <li>Quarantine Mimikatz and scripts with AV/EDR</li>
                <li>Reset passwords for all privileged accounts</li>
                <li> Apply PowerShell restrictions via GPO</li>
              </ul>
            </div>

          </div>

      </section>


      <section className="TechnicalReport"> 
        <h2>Technical Report</h2>

        <ul>
          <li>Incedent ID: 2025-07-02-SEC-01</li>
          <li>Analyst: Jordan Reid</li>
          <li>Severity: High</li>
          <li>Incident Status: Closed - Threat Eradicated</li>
        </ul>

        <h3>Incedent Summary:</h3>
        <p>
          On July 5th, 2025, the SOC identified suspicious activity involving unauthorized internal lateral movement.
          A phishing attack led to credential dumping using Mimikatz, followed by lateral movement using RDP and PsExec.
          Data exfiltration to an external FTP server was observed from a workstation in the HR department. 
        </p>  
        
        <div className="grid-container">

          <div className="details-container color-container">
            <h3>Timeline of Events:</h3>  
            <ul>
              <li>08:43 - Phishing email delivered to hr_specialist@company.com</li>
              <li>08:47 - Malicious PowerShell executed (obfuscated)</li>
              <li>08:48 - Credential dumping via mimikatz.exe</li>
              <li>09:02 - Lateral movement: RDP to FINANCE-PC01</li>
              <li>09:05 - Data zipped and sent to ftp://198.51.100.42</li>
            </ul> 
          </div>
  
          <div className="details-container color-container">
            <h3>IOCs (Indicators of Compromise)</h3>  
            <ul>
              <li>IP: 198.51.100.42 </li>
              <li>File: mimikatz.exe SHA256: abc123</li>
              <li>Registry Persistence: HKCU\...\Run\updater</li>
              <li>PowerShell: Invoke-Mimikatz (Base64 encoded)</li>
            </ul>
          </div>
  
          <div className="details-container color-container">
            <h3>Tools/Artifacts Detected: </h3>  
            <ul>
              <li>Mimikatz (Credential Dump) - Detected via EDR, Sysmon</li>
              <li>PowerShell (Initial Execution) - Detected via AMSI, Sysmon </li>
              <li>RDP / PsExec (Lateral Movement) - Windows Logs, EDR </li>
              <li>WinSCP Script (FTP Upload) - PCAP, Zeek </li>
            </ul> 
          </div>
         
        </div>

        <h3>Root Cause Of Attack</h3>
        <p>
          Phishing led to credential dumping and lateral movement through RDP. The attacker exploited weak email security and lack of MFA on RDP.
          The use of Mimikatz indicates the attacker had local admin rights on the initial host.
        </p>

        <div className="about-containers">


          <div className="details-container color-container">
          <h3>Actions Taken</h3>  
          <ul>
            <li>Isolated endpoints</li>
            <li>Disabled user account </li>
            <li>Blocked outbound FTP</li>
            <li>Reset credentials </li>
            <li>Created custom SIEM rules</li>
            <li>Applied GPO PowerShell restrictions</li>
          </ul>
          </div>

          <div className="details-container color-container">

          <h3>Lessons Learned: </h3>  
          <ul>
            <li>Improve email filtering</li>
            <li>Monthly phishing simulation </li>
            <li>Enforce MFA and LAPS</li>
            <li>Monitor FTP traffic in SIEM</li>
          </ul>

          </div>

        </div>


      </section>


      <section className="ExecutiveReport">
        <h2>Exeutive Report</h2>
        <p><span>Subject: Security Incident -</span> Unauthorized Access and Data Exfiltration </p>
        <p>
          On July 5th, our security team identified and contained a cybersecurity incident involving
           unauthorized access and internal movement. The attacker used stolen credentials to access
           internal systems and exfiltrate sensitive HR data. 
        </p>

        <div className="about-containers">
          
          <div className="details-container color-container">
            <h3>Impact Summary:</h3>  
            <ul>
              <li>Internal HR files accessed (no customer data) </li>
              <li>2 workstations affected</li>
              <li>Contained within 6 hours</li>
              <li>No ongoing persistence found </li>
            </ul> 
          </div>

          <div className="details-container color-container">
          <h3>Next Steps:</h3>  
            <ul>
              <li>Post-incident review</li>
              <li>Enhance phishing protections</li>
              <li>Strengthen authentication (MFA)</li>
              <li>Conduct staff training</li>
            </ul  >

          </div>

        </div>
       
        <p>Operations remain unaffected and systems are secure.</p>


      </section>

    </div>
  );
}

export default Project_2;