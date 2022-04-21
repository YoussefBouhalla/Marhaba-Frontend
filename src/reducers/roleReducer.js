const roleReducer = (state = 'client' , action) => {
    switch (action.type) {
        case 'SETADMIN':
            return 'admin';

        case 'SETDELIVERER':
            return 'deliverer';
    
        case 'SETCLIENT':
            return 'client';
    
        default:
            return state;
    }
}

export default roleReducer;