const alertReducer = (state = false , action) => {
    switch (action.type) {
        case 'OPENALERT':
            return action.payload;

        case 'CLOSEALERT':
            return false;
    
        default:
            return state;
    }
}

export default alertReducer;