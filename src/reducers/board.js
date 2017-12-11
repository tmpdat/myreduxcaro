const board = (state = {
    history: [{
        squares: Array(25).fill(''),
        row: -1,
        col: -1
    }],
    size: 5,
    xIsNext: true,
    isWon: false,
    winSquares: null,
    stepNumber: 0,
}, action) => {
    switch (action.type)
    {
        case 'CREATE_BOARD':
            const squares = Array(action.size*action.size).fill('');
            return {
              history: [{
                  squares: squares,
                  row: -1,
                  col: -1
              }],
                size: action.size,
                xIsNext: true,
                winSquares: null,
                isWon: false,
                stepNumber: 0,
            };
        case 'ADD_TURN':
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const curSquares = current.squares.slice();
            if(curSquares[action.index] || state.isWon)
                return state;
            curSquares[action.index] = state.xIsNext ? "X" : "O";
            return {
                ...state,
                history: [
                    ...history,
                    {
                        squares: curSquares,
                        row: parseInt(action.index / state.size),
                        col: action.index % state.size
                    }
                ],
                xIsNext: !state.xIsNext,
                stepNumber: state.stepNumber + 1,
            };
        case 'SET_WIN':
            return {
                ...state,
                winSquares: action.winSquares,
                isWon: true,
            };
        case 'JUMP_TO':
            const i = state.history[action.step].row*state.size + state.history[action.step].col;
            const winSquares =  calculateWinner(state.history[action.step].squares, i, state.size);
            if(winSquares)
            {
                return {
                    ...state,
                    stepNumber: action.step,
                    winSquares: winSquares,
                    isWon: true,
                    xIsNext: (action.step % 2) === 0
                };
            }
            return {
                ...state,
                stepNumber: action.step,
                winSquares: null,
                isWon: false,
                xIsNext: (action.step % 2) === 0
            };
        default:
            return state;
    }
};

const calculateWinner = (squares, i, n) => {
    let winSquares = [n];
    if(!squares[i])
        return null;
    let x = i % n;
    let y = parseInt(i / n);
    winSquares[0] = i;
    let count = 1;
    while(y > 0 && squares[(--y)*n + x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    y = parseInt(i / n);
    while(y < n-1 && squares[(++y)*n + x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    y = parseInt(i / n);
    count = 1;
    winSquares = [n];
    winSquares[0] = i;
    while(x > 0 && squares[y*n + --x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    x = i % n;
    while(x < n-1 && squares[y*n + ++x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    x = i % n;
    count = 1;
    winSquares = [n];
    winSquares[0] = i;
    while(x > 0 && y > 0 && squares[--y*n + --x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    x = i % n;
    y = parseInt(i / n);
    while(x < n-1 && y < n-1 && squares[++y*n + ++x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    x = i % n;
    y = parseInt(i / n);
    count = 1;
    winSquares = [n];
    winSquares[0] = i;
    while(x > 0 && y < n-1 && squares[++y*n + --x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    y = parseInt(i / n);
    x = i % n;
    while(x < n-1 && y > 0 && squares[--y*n + ++x] === squares[i])
    {
        winSquares[count] = y*n + x;
        count++;
        if(count >= 5)
        {
            return winSquares;
        }
    }
    return null;
}

export default board;