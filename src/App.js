import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <p className="App__population">LA Promise Zone</p>
          <p className="App__partnets">Partnets 74+</p>
          <p className="App__outcomes">Measurable Outcomes 13+</p>
          <Navbar />
        {/* </header> */}
      </div>
    );
  }
}

export default App;
