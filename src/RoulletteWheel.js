import React, { Component } from 'react'

class RoulletteWheel extends Component {
    handleSpin = ()=>{
        const newSpin = Math.floor(Math.random() * 36)
        this.props.recordSpin(newSpin)
    }
    
    render(){
        return(
            <React.Fragment>
                <h2>Spin the Wheel</h2>
                <button
                    onClick={this.handleSpin}
                >
                    Spin!
                </button>
            </React.Fragment>
        )
    }
}
export default RoulletteWheel