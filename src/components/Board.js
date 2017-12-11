import React from 'react';
import Square from './Square';

const isWinSquare = (x, winSquares) => {
    if(!winSquares)
        return false;
  for(var i = 0; i < winSquares.length; i++)
      if(winSquares[i] == x)
          return true;
  return false;
};

const renderSquare = (x, value, onClick, isWinSquare) => {
    return (
        <Square
            value={value}
            onClick={() => onClick(x)}
            isWinSquare={isWinSquare}
        />);
};

const Board = ({onClick, size, winSquares, squares}) => {
    let rows = Array(size);
    for (var i = 0; i < size; i++)
    {
        let cols = Array(size);
        for (var j = 0; j < size; j++) {
            const x = i * size + j;
            const value = squares[x];
            if(isWinSquare(x, winSquares))
            {
                cols[j] = renderSquare(x, value, onClick, true);
            }
            else
            {
                cols[j] = renderSquare(x, value, onClick, false);
            }
        }
        rows[i] = (
            <div className="board-row">
                {cols}
            </div>
        );
    }
    return (
        <div>
            {rows}
        </div>
    );
};

export default Board;
