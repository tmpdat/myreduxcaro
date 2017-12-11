import React from 'react';
import CreateBoard from '../containers/CreateBoard';
import DrawBoard from '../containers/DrawBoard';
import History from '../containers/History';

const App = () => (
    <div>
        <CreateBoard />
        <div className="row" style={{margin: 10}}>
            <div className='game col-sm-8 col-md-8'>
                <div className="game-board">
                    <DrawBoard />
                </div>
            </div>
            <div className='game col-sm-4 col-md-4'>
                <div className="game-info">
                    <History />
                </div>
            </div>
        </div>
    </div>
);

export default App;