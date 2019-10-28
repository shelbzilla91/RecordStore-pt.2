import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Hello from './Hello';
import Home from './components/Home.js'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Shelby'
    };
  }

  render() {
    return (
      <div>
    <Home/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
