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
            history: [
                { squares: Array(9).fill(null) }
            ],
            winner: null
        };
    }

    handleClick(i) {
        if (!this.state.winner) {
            const { history } = this.state;
            const current = history[history.length -1];
            const squares = current.squares.slice();
            if (this.isEmpty(squares[i])) {
                squares[i] = this.state.isPlayerOneActive ? this.state.playerOne : this.state.playerTwo;
                const winner = this.calculateWinner(squares);
                this.updateState(history, squares, !this.state.isPlayerOneActive, winner);
            }
        }
    }

    isEmpty(square) {
        return square === null;
    }

    updateState(history, squares, isPlayerOneActive, winner) {
        this.setState({
            history: history.concat([{
                squares: squares
              }]),
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
        const { isPlayerOneActive, playerOne, playerTwo, winner, history } = this.state;
        const current = history[history.length - 1];
        let status = `Next player: ${isPlayerOneActive ? playerOne : playerTwo}`;
        if (winner) {
            status = `Winner: ${winner}`;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                </div>
            </div>

        );
    }
}
