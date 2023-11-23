import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Maongca" age={21} email="maongca@tup.edu.ph" />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
