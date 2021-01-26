import './App.css';

function App() {
  console.log('TEST', process.env.REACT_APP_NAME)
  console.log('TOKEN', process.env.REACT_APP_ACCESS_TOKEN)
  console.log('API', process.env.REACT_APP_API)
  return (
    <div className="App">
      <p>One Two Three</p>
      <p>{process.env.REACT_APP_NAME}</p>
      <p>Try again and again</p>
  <p>Access Token {process.env.REACT_APP_ACCESS_TOKEN}</p>
  <p>API KEY {process.env.REACT_APP_API}</p>
  <p>HUUUUH</p>
    </div>
  );
}

export default App;
