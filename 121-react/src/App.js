import React from 'react';
import logo from './logo.svg';
import './App.css';

// const elem = React.createElement('h2', {className: 'greeting icon'}, "Hello world");

class Field extends React.Component {
  render() {
    const holder = "Enter here:";
    const styleField = {
      width: "400px",
    };
    return <input type="text" placeholder={holder} style={styleField}/>
  };
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Field/>
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
      </header>
    </div>
  );
}

export default App;
