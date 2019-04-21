import React, { Component } from 'react';
// import './App.css';
// import Cards from "./components/cards";
import Navbar from "./components/navbar";
import Title from "./components/title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Title title="Clicky Memory Game" />
      </div>
    );
  }
}

export default App;
