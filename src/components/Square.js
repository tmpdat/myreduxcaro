import React from 'react';

const Square = ({onClick, value, isWinSquare}) => {
    if(isWinSquare)
        return (
            <button className="square" onClick={onClick} style={{background: 'red'}}>
                {value}
            </button>
        );
    else
        return (
            <button className="square" onClick={onClick}>
                {value}
            </button>
        );
};

export default Square;