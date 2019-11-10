import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';


import Home from './components/pages/Home.js'
import './style.css';

class App extends Component {
 

  render() {
    return (
      <div>
    <Home/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
