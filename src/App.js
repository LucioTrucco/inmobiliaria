import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeScreen } from './screens/HomeScreen/HomeScreen.tsx';




// About component
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page.</p>
    </div>
  );
}

// Contact component
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Reach out to us here.</p>
    </div>
  );
}

// App component with router
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
