
import './App.css';

import React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
 import News from './components/News';

export default class App extends Component {
  c= 'jogn';
  render(){
    return(
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}