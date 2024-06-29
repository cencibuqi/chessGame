import React, {Component} from 'react';
import Square from "./Square";
import "./BoardRow.css";

class BoardRow extends Component {
    render() {
        return (
            <div className="board-row">
                <Square positionX={this.props.positionX} positionY={0} value={this.props.value[0]} onSquareClick={this.props.onSquareClick} />
                <Square positionX={this.props.positionX} positionY={1} value={this.props.value[1]} onSquareClick={this.props.onSquareClick} />
                <Square positionX={this.props.positionX} positionY={2} value={this.props.value[2]} onSquareClick={this.props.onSquareClick} />
            </div>
        );
    }
}

export default BoardRow;