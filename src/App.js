import React, { Component } from 'react';
import NavBar from './Navbar';
import Body from './Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Body/>
      </div>
    );
  }
}

export default App;
