const initialState = {};

export const authenticationReducer = (state = initialState, action) => {
    console.log('auth reducer - action: ', action);
    console.log('auth reducer - state: ', state);

    switch(action.type) {
        // case GAME_RESIZE_BOARD:
        //     const game = handleResizeBoardClick(state, action.payload.width, action.payload.height);
        //     console.log('resized game: ', game);
        //     return game;
        default:
            return state;
    }
}
