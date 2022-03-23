import logo from './logo.svg';
import './App.css';
import TripList from './components/TripList';

function App() {
  return (
    <div className="App">
            <TripList />
      <footer>
        <p>
          created by Heather Church using
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </footer>
    </div>
  );
}

export default App;

