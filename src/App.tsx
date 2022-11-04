import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>💚 Remove unnecessary scripts</p>
        <p>✏️ Update netlify page name</p>
        <a
          className="App-link"
          href="https://github.com/BladimirOrihuela-Hexaware/blad-deployment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout the repo
        </a>
      </header>
    </div>
  );
}

export default App;
