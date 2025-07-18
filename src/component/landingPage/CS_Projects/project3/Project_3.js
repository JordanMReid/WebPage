import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './project_3.css';


function Project_3() {
    const navigate = useNavigate();
  
      useLayoutEffect(() => {
        window.scrollTo(0, 0);
        }, []
      );
      
    return(
    <div className= "Project_3">

      <diiv className="project-header">
        <h2>Rules</h2> 
        <p>
          As a Cybersecurity student, I’ve gained hands-on experience with various tools and
          techniques for detecting malicious threats. Among the most valuable skills I’ve
          developed is writing detection rules using tools like Snort and Sigma.
          Below are some of the rules I’ve created or used—these have been especially
          helpful during Capture The Flag (CTF) challenges and for improving my home network
          security. Please take a look at the rules.
        </p>
      </diiv>

      <div className='center'>
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


    <section calssName="Snort">
      
      <h3>Snort Rules</h3>
      <div className='code-snippet'>
        <pre>
          <code>
            {`alert tcp any any -> any 80 (msg:"Possible SQL Injection Attempt"; flow:to_server,established; content:"' OR '1'='1"; http_uri; nocase; classtype:web-application-attack; sid:1000001; rev:1;)`}
          </code>
        </pre>
      </div>

        <div className='code-snippet'>
          <pre>
            <code>
              {`alert tcp any any -> any 80 (
                msg:"SQL Injection Attempt";            # Human-readable description
                sid:1000001;                            # Unique rule ID
                rev:2;                                  # Revision number
                reference:cve,2021-1234;                # External reference
                classtype:web-application-attack;       # Attack classification
                priority:1;                             # Alert priority)
              `}
            </code>
          </pre>
        </div>

        <div className='code-snippet'>
          <pre>
            <code>
              {`alert tcp any any -> $HOME_NET any (
               msg:"SCAN TCP Port Scanning";
               detection_filter:track by_src, count 30, seconds 60;
               flags:S;
               flow:stateless;
               classtype:attempted-recon;
               sid:3000004;
               rev:1;)
              `}
            </code>
          </pre>
        </div>

    </section>

    <section className="Sigma">
      
      <h3>Sigma Rules</h3>
      <div className='code-snippet'>
        <pre>
          <code>
            {`title: Remote Thread Creation Via PowerShell
              id: eeb2e3dc-c1f4-40dd-9bd5-149ee465ad50
              related:
                  - id: 99b97608-3e21-4bfe-8217-2a127c396a0e
                    type: derived
              status: test
              description: Detects the creation of a remote thread from a Powershell process to another process
              references:
                  - https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse
              author: Nikita Nazarov, oscd.community
              date: 2020-10-06
              modified: 2023-11-10
              tags:
                  - attack.execution
                  - attack.t1059.001
                  - detection.threat-hunting
              logsource:
                  product: windows
                  category: create_remote_thread
              detection:
                  selection:
                      SourceImage|endswith:
                          - 'powershell.exe'
                          - 'pwsh.exe'
                  filter_main_compattelrunner:
                      SourceParentImage|endswith: ':Windows/System32/CompatTelRunner.exe'
                  condition: selection and not 1 of filter_main_*
              falsepositives:
                  - Unknown
                  level: medium`}
          </code>
        </pre>
                  </div>
      <div className='code-snippet'>
        <pre>
          <code>
            {`title: Python Path Configuration File Creation - Linux
              id: fb96c26c-9f85-4ae7-af0d-ed1ed1f1f5ce
              related:
                  - id: e3652ba3-0ad8-4010-a957-b7ba369e7bac # Windows
                    type: similar
                  - id: 4f394635-13ef-4599-b677-3353e0f84f55 # MacOS
                    type: similar
              status: test
              description: |
                  Detects creation of a Python path configuration file (.pth) in Python library folders, which can be maliciously abused for code execution and persistence.
                  Modules referenced by these files are run at every Python startup (v3.5+), regardless of whether the module is imported by the calling script.
                  Default paths are 'lib/site-packages/*.pth' (Windows) and '/lib/pythonX.Y/site-packages/*.pth' (Unix and macOS).
              references:
                  - https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/
                  - https://www.virustotal.com/gui/file/3de2a4392b8715bad070b2ae12243f166ead37830f7c6d24e778985927f9caac
                  - https://docs.python.org/3/library/site.html
              author: Andreas Braathen (mnemonic.io)
              date: 2024-04-25
              tags:
                  - attack.execution
                  - attack.t1059.006
                  - detection.threat-hunting
              logsource:
                  product: linux
                  category: file_event
              detection:
                  selection:
                      TargetFilename|re: '(?i)/lib/python3.([5-9]|[0-9]{2})/site-packages/' # Unix and macOS
                      TargetFilename|endswith: '.pth'
                  condition: selection
              falsepositives:
                  - Although .pth files are discouraged due to potential security implications, these are legitimate files by specification.
              level: medium`}
          </code>
        </pre>
      </div>      

    </section>
   
    </div>
  );
}

export default Project_3;