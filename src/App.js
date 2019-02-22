import React, { Component } from 'react';
import Video from './components/Video'
import './App.css';
import About from './components/About'
import Title from './components/Title'
import Conversation from './components/Conversation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <Video/>
        <Title/>
        
        <About/>
        <Conversation/>

      </div>
      </div>
    );
  }
}

export default App;
