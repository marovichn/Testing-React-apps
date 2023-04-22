import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Greeting></Greeting>
      <code>Edit</code>
      <Async></Async>
    </div>
  );
}

export default App;
