export const createBoard = size => {
    return {
        type: 'CREATE_BOARD',
        size
    };
};

export const addTurn = (i) => {
    return {
        type: 'ADD_TURN',
        index: i
    }
};

export const setWin = (winSquares) => {
    return {
        type: 'SET_WIN',
        winSquares
    }
};

export const reverseInfo = () => {
    return {
        type: 'REVERSE_INFO',
    }
};

export const jumpTo = (step) => {
    return {
        type: 'JUMP_TO',
        step
    }
};