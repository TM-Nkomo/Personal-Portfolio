import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

function App() {
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
