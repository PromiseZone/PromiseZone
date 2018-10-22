import React, { Component } from 'react';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <p className="App__population">Population 170,000</p>
          <p className="App__partnets">Partnets 74+</p>
          <p className="App__outcomes">Measurable Outcomes 13+</p>
          <Navbar />
        {/* </header> */}
      </div>
    );
  }
}

export default App;
