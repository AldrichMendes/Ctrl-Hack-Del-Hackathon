import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TimTest from './TimTest';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

{/* IGNORE THIS FOR NOW */}
        <Router>
      <div>
        <nav>
          <ul>

            <li><Link to="/timtest">Tim Test</Link></li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/timtest" element={<TimTest />} />  
        </Routes>
      </div>
    </Router>


      </header>
    </div>
  );
}

export default App;
