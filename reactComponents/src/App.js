import React, { Component } from 'react';
import Navbar from './components/common/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  />
        <div className="App-Content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
