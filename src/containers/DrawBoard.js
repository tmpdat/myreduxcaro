import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import {addTurn} from "../actions";
import {setWin} from "../actions";

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

let squares;
let size;

const mapStateToProps = (state) => {
    squares = state.board.history[state.board.stepNumber].squares;
    size = state.board.size;
    return {
        size: state.board.size,
        winSquares: state.board.winSquares,
        squares: squares
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (i) => {
            dispatch(addTurn(i));
            const winSquares =  calculateWinner(squares, i, size);
            if(winSquares)
                dispatch(setWin(winSquares));
        }
    }
};

const DrawBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default DrawBoard;