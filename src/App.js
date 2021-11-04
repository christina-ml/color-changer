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

  /* 
    - Modulo needs to match the number of colors in the array
    - const nextIndex = (colorIndex + 1) % 8; for 8 colors
    - can make it dynamic to the length of the possibleColors array
  */
  handleChangeColor = () => {
    const { colorIndex, possibleColors } = this.state;
    const nextIndex = (colorIndex + 1) % possibleColors.length;

    this.setState({
      colorIndex: Math.floor(Math.random() * 8),
      // colorIndex: nextIndex,
    })
  }

  render(){
    // destructuring:
    const { possibleColors, colorIndex } = this.state
    return (
      <div className={ possibleColors[colorIndex] }>
        <h1>Color Picker</h1>
        <button onClick={ this.handleChangeColor }>Change color!</button>
      </div>
    )
  }
}

export default App;
