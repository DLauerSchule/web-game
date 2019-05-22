const initalState = {
    tiles: [],
}

const mapReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TILES':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default mapReducer;