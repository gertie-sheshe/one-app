import logo from './logo.svg';
import './App.css';

function App() {
  console.log('TEST', process.env.REACT_APP_NAME)
  return (
    <div className="App">
      <p>One Two Three</p>
  <p>{process.env.REACT_APP_NAME}</p>
    </div>
  );
}

export default App;
