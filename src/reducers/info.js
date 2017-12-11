const info = (state = {isDesc: false}, action) => {
    switch (action.type)
    {
        case 'REVERSE_INFO':
            return {
                isDesc: !state.isDesc,
            };
        default:
            return state;
    }
};

export default info;