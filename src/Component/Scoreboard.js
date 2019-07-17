import React, { Component } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer'

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
                {players_copy.map(this.renderPlayer)}
                <AddPlayer addPlayer={this.addPlayer} />
            </div>
        )
    }
    renderPlayer = player => {
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
        // console.log(this.props)
        const updatedPlayers = this.state.players.map((player) => {
            if (player.id === id) {
                return { ...player, score: player.score + 1 }
            } else {
                return player
            }
        })
        this.setState({ players: updatedPlayers })
    }

    addPlayer =(name) => {
        const player = {
            id: Math.round(Math.random() * 1000),
            name,
            score:0
        }
        this.setState({
            players: this.state.players.concat(player)})
    }
}

export default Scoreboard