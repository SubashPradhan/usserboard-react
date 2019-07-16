import React, { Component } from 'react'
import Player from './Player'

class Scoreboard extends Component {
    state = {
        players: [
            { id: 1, name: "Subash", score: 5 },
            { id: 2, name: "Mimi", score: 3 },
            { id: 3, name: "Kelley", score: 4 }
        ]
    }
    render() {
        const players_copy = [...this.state.players]
        players_copy.sort((a, b) => b.score - a.score)
        return (

            <div className="scoreboard">
                <h2>ScoreBoard</h2>
                {players_copy.map(this.renderPlayer)}

            </div>
        )
    }
    renderPlayer = player => {
        // console.log(player)
        return (
            <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                incrementScore={this.incrementScoreOfPlayer}
            />
        )
    }
    incrementScoreOfPlayer = (id) => {
        const updatedPlayers = this.state.players.map((player) => {
            if(player.id === id){
                console.log(player)
                return {player, score: player.score + 1}
            }else{
                return player
            }
        })
        this.setState({players : updatedPlayers})
    }
      
    }







export default Scoreboard