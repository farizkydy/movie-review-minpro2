const initialState = {
    moviesID: {},
    comment: []
};

const reviewReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_REVIEWS":
            return {
                ...state,
                moviesID: payload
            };
        default:
            return {
                ...state
            };
    };


};  