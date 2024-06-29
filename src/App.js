import React from 'react';
import Square from "./Components/Square";
import "./App.css";
import BoardRow from "./Components/BoardRow";
import {calculateWinner} from "./utils/util";

const App = () => {

    const [values, setValues] = React.useState(Array(9).fill(""));
    const [isXNext, setXNext] = React.useState(true);

    const clickHandler = (e, posX, posY) => {
        if(values[3 * posX + posY] || calculateWinner(values)) return;
        setValues((prevValues) => {
            if(isXNext){
                prevValues[3 * posX + posY] = "X";
            }else {
                prevValues[3 * posX + posY] = "O";
            }
            setXNext(!isXNext);
            return [...prevValues];
        });
    }

    return (
        <div className="app">
            <BoardRow positionX={0} value={values.slice(0, 3)} onSquareClick={clickHandler} />
            <BoardRow positionX={1} value={values.slice(3, 6)} onSquareClick={clickHandler} />
            <BoardRow positionX={2} value={values.slice(6)} onSquareClick={clickHandler} />
        </div>
    );
};

export default App;