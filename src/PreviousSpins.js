import React, {Component} from 'react'

class PreviousSpins extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>Prevous Spins</h2>

                <ul>
                    {this.props.spins.map((spin, index)=>{
                        return(<li key={index}>{spin}</li>)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default PreviousSpins