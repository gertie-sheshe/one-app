import './App.css';

function App() {
  console.log('TEST', process.env.REACT_APP_NAME)
  console.log('TOKEN', process.env.REACT_APP_ACCESS_TOKEN)
  console.log('API', process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <p>A React App</p>
      <p>App Name: {process.env.REACT_APP_NAME}</p>
      <p>Access Token: {process.env.REACT_APP_ACCESS_TOKEN}</p>
      <p>API KEY: {process.env.REACT_APP_API_KEY}</p>
    </div>
  );
}

export default App;
