import React from 'react';
import "./Square.css";

const Square = (props) => {

    // const [value, setValue] = React.useState("");

    const clickHandler = (e) => {
        props.onSquareClick(e, props.positionX, props.positionY);
    }

    return (
        <button className="square" onClick={clickHandler}>
            {props.value}
        </button>
    );
};

export default Square;