import React from 'react';
import { connect } from 'react-redux';
import {reverseInfo, jumpTo} from "../actions";
import Info from '../components/Info';

const mapStateToProps = (state) => {
    return {
        history: state.board.history,
        stepNumber: state.board.stepNumber,
        isDesc: state.info.isDesc,
        isWon: state.board.isWon,
        xIsNext: state.board.xIsNext,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (stepNumber) => {
            dispatch(jumpTo(stepNumber));
        },
        onReverseClick: () => {
            dispatch(reverseInfo());
        }
    }
};

const History = connect(
    mapStateToProps,
    mapDispatchToProps
)(Info);

export default History;