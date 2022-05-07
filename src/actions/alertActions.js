export const openAlertAction = (message) => {
    return {
        type: 'OPENALERT',
        payload: message
    }
}

export const closeAlertAction = () => {
    return {
        type: 'CLOSEALERT'
    }
}