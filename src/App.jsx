import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeScreen } from './screens/HomeScreen/HomeScreen.jsx';
import { Contact } from './screens/Contact/Contact.jsx';



// App component with router
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
