import React from 'react';

const Info = ({history, isWon, xIsNext, stepNumber, isDesc, onClick, onReverseClick}) => {
    const current = history[stepNumber];
    let winner = null;
    let order;
    const moves = history.map((step, move) => {
        let order;
        const move2 = history.length - move;
        if (isDesc) {
            move = move2 - 1;
        }
        const col = history[move].col;
        const row = history[move].row;
        order = move ?
            'Go to move #' + move + ' at (' + col + ', ' + row + ')' :
            'Go to game start';
        if (move == stepNumber)
            return (
                <li key={move}>
                    <button onClick={() => onClick(move)} style={{color: 'blue', fontWeight: 'bold'}}>
                        {order}
                    </button>
                </li>
            );
        else
            return (
                <li key={move}>
                    <button onClick={() => onClick(move)} style={{color: 'blue',}}>
                        {order}
                    </button>
                </li>
            );
    });

    let status;
    if (isWon) {
        winner = xIsNext ? "O" : "X";
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <div>
            <div>{status}</div>
            <ol>
                <button className='btn btn-outline-dark' size='sm' onClick={onReverseClick}>Sắp xếp lại</button>
            </ol>
            <ol>{moves}</ol>
        </div>);
};

export default Info;