import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../actions/index';

let CreateBoard = ({ dispatch }) => {
    let sizeBoard;

    return (
        <div>
            <nav className='bg-dark'>
                <div className='row'>
                    <div className='col-sm-4 col- md-4'>
                        <a href='/' className="text-muted"><h1>Caro</h1></a>
                    </div>
                    <div className='col-sm-8 col- md-8'>
                        <form className='form-inline' style={{margin:10}} onSubmit={e => {
                            e.preventDefault();
                            if (!sizeBoard.value.trim()) {
                                return;
                            }
                            if(parseInt(sizeBoard.value) < 5 || parseInt(sizeBoard.value) > 25)
                            {
                                alert("Kích thước bàn cờ phải từ 5 đến 25");
                                return;
                            }
                            dispatch(createBoard(sizeBoard.value));
                            sizeBoard.value = '';
                        }}>
                            <div className='form-group'>
                                <label className='text-light' style={{margin:5}}>Size Board</label>
                                <input className='form-control' style={{margin:5}} ref={node => {
                                    sizeBoard = node
                                }}></input>
                            </div>
                            <div className='form-group'>
                                <button className='btn btn-outline-light' type='submit'>Vẽ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
CreateBoard = connect()(CreateBoard);

export default CreateBoard;