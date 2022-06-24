import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from './Aside';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import Skill from './Skills';
function App() {
  return (
    <>
      <div className="flex-sb container">
        <div className="flex-20">
          <Aside />
        </div>
        <div className="flex-80">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/skill" element={<Skill />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/project" element={<Project />} />

            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
