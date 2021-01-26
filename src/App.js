import './App.css';

function App() {
  console.log('TEST', process.env.REACT_APP_NAME)
  console.log('TOKEN', process.env.REACT_APP_NAME_ONE)
  console.log('API', process.env.REACT_APP_NAME_TWO)
  return (
    <div className="App">
      <p>One Two Three</p>
      <p>{process.env.REACT_APP_NAME}</p>
      <p>Try again and again</p>
  <p>Access Token {process.env.REACT_APP_NAME_ONE}</p>
  <p>API KEY {process.env.REACT_APP_NAME_TWO}</p>
    </div>
  );
}

export default App;
