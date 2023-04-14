import logo from "./logo.svg";
import "./App.css";
import Libreta from "./components/container/libreta";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Libreta></Libreta>
      </header>
    </div>
  );
}

export default App;
