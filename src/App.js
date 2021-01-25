import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>One Two Three</p>
  <p>{process.env.REACT_APP_NAME}</p>
    </div>
  );
}

export default App;
