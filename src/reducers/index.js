import { combineReducers } from 'redux';
import board from './board';
import info from './info';

const caroGame = combineReducers({
    board,
    info
});

export default caroGame;