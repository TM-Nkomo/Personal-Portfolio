import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
  }, [])
  return (
    <div className="App">
      <Profile/>
      <Navigation/>
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
