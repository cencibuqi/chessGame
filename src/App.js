import React from 'react';
import Square from "./Components/Square";
import "./App.css";
import BoardRow from "./Components/BoardRow";
import {calculateWinner} from "./utils/util";
import Game from "./Components/Game";

const App = () => {

    // const [values, setValues] = React.useState(Array(9).fill(""));
    const [history, setHistory] = React.useState([Array(9).fill("")]);
    const [curMove, setCurMove] = React.useState(0);
    const isXNext = curMove % 2 === 0;
    const currentSquares = history[curMove];
    const winner = calculateWinner(currentSquares);
    let status = "";
    if(winner){
        status = `Winner: ${winner}`;
    }else {
        status = `Next player: ${isXNext ? "X" : "O"}`;
    }

    const playHandler = (nextSquares) => {
        const nextHistory = [...history.slice(0, curMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove) => {
        setCurMove(nextMove);
    }

    return (
        <div className="app">
            <div className={"status"}>
                <label>{status}</label>
            </div>
            <div className={"app-game"}>
                <Game onPlay={playHandler} history={history} curMove={curMove} isXNext={isXNext} onJump={jumpTo} />
            </div>
        </div>
    );
};

export default App;
