import React from 'react';
import PreviousSpins from './PreviousSpins'
import RoulletteWheel from './RoulletteWheel'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      previousSpins: []
    }
  }
  
  handleSpin = (number) =>{
    const spins = this.state.previousSpins
    spins.push(number)
    this.setState({previousSpins: spins})
  }
  
  render(){
    return (
      <div>
        <div id="wheel">
          <RoulletteWheel recordSpin={this.handleSpin} />
        </div>
        <div id="previous-spins">
          <PreviousSpins spins={this.state.previousSpins} />
        </div>
      </div>
    )
  }
}

export default App;
