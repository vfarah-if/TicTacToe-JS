import React, { Component } from 'react';
import Square from './Square';
import {
    TOP_LEFT, TOP_MIDDLE, TOP_RIGHT,
    MIDDLE_LEFT, MIDDLE, MIDDLE_RIGHT,
    BOTTOM_LEFT, BOTTOM_MIDDLE, BOTTOM_RIGHT
} from './Constants';

export default class Board extends Component {   
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(TOP_LEFT)}
                    {this.renderSquare(TOP_MIDDLE)}
                    {this.renderSquare(TOP_RIGHT)}
                </div>
                <div className="board-row">
                    {this.renderSquare(MIDDLE_LEFT)}
                    {this.renderSquare(MIDDLE)}
                    {this.renderSquare(MIDDLE_RIGHT)}
                </div>
                <div className="board-row">
                    {this.renderSquare(BOTTOM_LEFT)}
                    {this.renderSquare(BOTTOM_MIDDLE)}
                    {this.renderSquare(BOTTOM_RIGHT)}
                </div>
            </div>
        );
    }
}