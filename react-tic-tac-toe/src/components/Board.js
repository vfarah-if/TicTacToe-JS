import React, { Component } from 'react';
import Square from './Square';

export const TOP_LEFT = 0;
export const TOP_MIDDLE = 1;
export const TOP_RIGHT = 2;
export const MIDDLE_LEFT = 3;
export const MIDDLE = 4;
export const MIDDLE_RIGHT = 5;

class Board extends Component {
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

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;
    }

    calculateWinner(squares) {
        const lines = [
            [TOP_LEFT, TOP_MIDDLE, TOP_RIGHT],
            [MIDDLE_LEFT, MIDDLE, MIDDLE_RIGHT]
        ];
        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (this.lineIsEqual(squares, a, b, c)) {
                return squares[a];
            }
        }

        return null;
    }

    lineIsEqual(squares, a, b, c) {
        return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    }

    render() {
        const { isPlayerOneActive, playerOne, playerTwo, winner } = this.state;
        let status = `Next player: ${isPlayerOneActive ? playerOne : playerTwo}`;
        if (winner) {
            status = `Winner: ${winner}`;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;