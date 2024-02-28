import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Skills from './Skills';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Navigation/>
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
