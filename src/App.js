import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      possibleColors: [
        'rebecca-purple',
        'cadet-blue',
        'dark-goldenrod',
        'pinstripe-blue',
        'hotpink',
        'dark-green',
        'ghost-white',
        'banana-yellow'
      ],
      colorIndex: 0,
    }
  }

  render(){
    return (
      <div className={ this.state.possibleColors[0] }>
        hi
      </div>
    )
  }
}

export default App;
