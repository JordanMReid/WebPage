import React, { useState } from 'react';
import './CS_domain.css';

function CS_Domain() {
  const [activeIndex, setActiveIndex] = useState(null);

  const domains = [
    {
      name: "Security Fundamentals",
      tools: ["Nmap", "Netcat", "Linux CLI", "Windows CMD/PowerShell"],
      skills: ["OSI model", "TCP/IP, DNS, HTTP/S", "Linux & Windows OS basics", "Security principles (CIA Triad, threats, vulnerabilities)"]
    },
    {
      name: "Security Operations & Incident Response",
      tools: ["TheHive", "Cortex", "Wazuh", "Security Onion", "Shuffle (SOAR simulator)", "Splunk", "Kibana", "Windows Event Viewer", "AuditPol"],
      skills: ["Incident detection, response, and reporting", "Playbook development (L2)", "IOC triage and investigation", "Case documentation", "SOAR concepts"]
    },
    {
      name: "Threat Intelligence & OSINT",
      tools: ["MISP", "OpenCTI", "VirusTotal", "AbuseIPDB", "Shodan", "Censys", "Hybrid Analysis", "SpiderFoot", "Maltego"],
      skills: ["IOC gathering (hashes, IPs, domains)", "Threat actor profiling", "Using intel feeds to improve detection", "OSINT collection for investigations"]
    },
    {
      name: "Threat Detection & Monitoring",
      tools: ["Splunk", "ELK Stack", "Wazuh", "Wireshark", "TCPDump", "Sigma Rules"],
      skills: ["Log analysis & event correlation", "Alert triage and prioritization", "Threat hunting (L2)", "Hypothesis-driven detection (L2)", "SIEM usage and alert rule creation"]
    },
    {
      name: "Memory & Disk Forensics",
      tools: ["Volatility (2 & 3)", "Autopsy", "Sleuth Kit", "Magnet RAM Capture", "Redline"],
      skills: ["Acquiring memory dumps", "Analyzing memory dumps", "Activity tracking", "Timeline creation", "Forensic reporting"]
    },
    {
      name: "System Hardening & Defense",
      tools: ["Fail2Ban", "iptables", "ufw", "Windows Group Policy", "SecPol.msc", "AuditPol", "OSQuery"],
      skills: ["Linux and Windows hardening", "Firewall controls", "User privilege controls", "Auditing", "GPO security enforcement"]
    },
    {
      name: "Scripting & Automation",
      tools: ["Python", "PowerShell", "Bash", "SOAR Tools (conceptual)", "Sigma Rules", "Python YAML parsers"],
      skills: ["Automating scripts for detection, enrichment, and response", "Using APIs for data collection and alerting", "Writing custom playbooks"]
    },
    {
      name: "Malware Analysis (Static & Dynamic)",
      tools: ["PEStudio", "Exeinfo PE", "Any.Run", "Cuckoo Sandbox", "Ghidra", "Cutter", "YARA", "VirusTotal"],
      skills: ["Malware analysis", "Analyzing malicious file behavior", "Detecting obfuscation, persistence", "Static vs dynamic analysis techniques"]
    }
  ];

  return (
    <div className="cybersecurity-domains">
      {domains.map((domain, index) => (
        <div
          className={`domain domain-${index} ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="domain-title">{domain.name}</div>

          <div className={`domain-content ${activeIndex === index ? 'show' : ''}`}>
            <div className="tools">
              <h4>Tools:</h4>
              <ul>
                {domain.tools.map((tool, toolIdx) => (
                  <li key={toolIdx}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className="skills">
              <h4>Skills:</h4>
              <ul>
                {domain.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CS_Domain;
