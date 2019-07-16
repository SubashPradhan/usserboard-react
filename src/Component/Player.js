import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Player extends Component{
    static propTypes = {
        name : PropTypes.string.isRequired
    } 
    render(){
        return (
            <div className="player">
                {/* <p className="id">{this.props.id}</p> */}
                <p className ="name">Name: {this.props.name} </p>
                <p className="scores">Score: {this.props.score}</p>
            </div>
        )
    }
}

export default Player