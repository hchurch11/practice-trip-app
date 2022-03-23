import logo from './logo.svg';
import './App.css';
import TripList from './components/TripList';
import { useState } from 'react/cjs/react.development';

function App() {

  const [showTrips, setShowTrips] = useState(true)


  
  return (
    <div className="App">
      <button onClick={() => setShowTrips(!showTrips)}>{showTrips ? "Hide Trips" : "Show Trips"}</button>
          {showTrips &&  <TripList />}
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

