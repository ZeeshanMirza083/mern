
export const login = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            state = action.val
            return state
        default:
            console.log('....');
            return state
    }
}