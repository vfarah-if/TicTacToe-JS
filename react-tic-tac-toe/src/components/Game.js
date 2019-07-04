import React, { Component } from 'react';
import Board from './Board';
import {
    LINES
} from './Constants';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayerOneActive: true,
            playerOne: 'X',
            playerTwo: '0',
            squares: Array(9).fill(null),
            winner: null
        };
    }

    handleClick(i) {
        if (!this.state.winner) {
            const squares = this.state.squares.slice();
           
            if (this.isEmpty(squares[i])) {
                squares[i] = this.state.isPlayerOneActive ? this.state.playerOne : this.state.playerTwo;
                const winner = this.calculateWinner(squares);
                this.updateState(squares, !this.state.isPlayerOneActive, winner);
            }
        }
    }

    isEmpty(square) {
        return square === null;
    }

    updateState(squares, isPlayerOneActive, winner) {
        this.setState({
            squares: squares,
            isPlayerOneActive: isPlayerOneActive,
            winner: winner
        });
    }

    calculateWinner(squares) {
        for (let index = 0; index < LINES.length; index++) {
            const [a, b, c] = LINES[index];
            if (this.lineIsUniform(squares, a, b, c)) {
                return squares[a];
            }
        }

        return null;
    }

    lineIsUniform(squares, a, b, c) {
        return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    }

    render() {
        const { isPlayerOneActive, playerOne, playerTwo, winner, squares } = this.state;
        let status = `Next player: ${isPlayerOneActive ? playerOne : playerTwo}`;
        if (winner) {
            status = `Winner: ${winner}`;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                </div>
            </div>
        );
    }
}
