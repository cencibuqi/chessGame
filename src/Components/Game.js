import React from 'react';
import BoardRow from "./BoardRow";
import "./Game.css";
import {calculateWinner} from "../utils/util";

const Game = (props) => {

    const currentSquares = props.history[props.curMove];

    const clickHandler = (e, posX, posY) => {
        if(currentSquares[3 * posX + posY] || calculateWinner(currentSquares)) return;
        const nextSquares = currentSquares.slice();
        if(props.isXNext){
            nextSquares[3 * posX + posY] = "X";
        }else {
            nextSquares[3 * posX + posY] = "O";
        }

        props.onPlay(nextSquares);
    }

    const moves = props.history.map((squares, move) => {
        let desc = "";
        if(move > 0){
            desc += `Go to move #${move}`;
        }else {
            desc += `Go to game start`;
        }

        return (
            <li key={move} className="">
                <button onClick={() => props.onJump(move)}>{desc}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <div className="borderRow">
                    <BoardRow positionX={0} value={currentSquares.slice(0, 3)} onSquareClick={clickHandler} />
                    <BoardRow positionX={1} value={currentSquares.slice(3, 6)} onSquareClick={clickHandler} />
                    <BoardRow positionX={2} value={currentSquares.slice(6)} onSquareClick={clickHandler} />
                </div>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
