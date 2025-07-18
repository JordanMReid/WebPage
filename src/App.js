import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './homePage/Home';
import Certs from './component/landingPage/Certs';
import { ProjectOne, ProjectTwo, ProjectThree } from './component/landingPage/CS_Projects/project_export';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Certs" element={<Certs />} />
              <Route path="/Project_1" element={<ProjectOne />} />
              <Route path="/Project_2" element={<ProjectTwo />} />
              <Route path="/Project_3" element={<ProjectThree />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
