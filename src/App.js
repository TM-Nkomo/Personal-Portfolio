import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Navigation/>
    </div>
  );
}

export default App;
