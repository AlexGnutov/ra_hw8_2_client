import './App.css';
import TestComponent from "./components/test-component";
import LoaderComponent from "./components/loader-component";

function App() {
  return (
    <div className="App">
      <TestComponent url={process.env.REACT_APP_HOST_URL + 'data'}/>
      <TestComponent url={process.env.REACT_APP_HOST_URL +  'error'}/>
      <TestComponent url={process.env.REACT_APP_HOST_URL + 'loading'}/>
      <LoaderComponent/>
    </div>
  );
}

export default App;
