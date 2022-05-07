const popupReducer = (state = false , action) => {
    switch (action.type) {
        case 'OPENLOGIN':
            return 'login';

        case 'OPENREGISTER':
            return 'register';

        case 'CLOSE':
            return false;
    
        default:
            return state;
    }
}

export default popupReducer;