import React, { Component } from "react";
import SmurfList from './SmurfList'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
      
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
