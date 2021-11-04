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

  handleChangeColor = () => {
    this.setState({
      colorIndex: this.state.colorIndex + 1
    })
  }

  render(){
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
