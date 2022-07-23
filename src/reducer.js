export const comments = (state = {
    loading:false,
    data:[],
    error:""
}, action) => {
    switch (action.type) {
        case "loading":
            return action.payload;
        case "success":
            return action.payload;
        case "error":
            return action.payload;
        case "changeName":
            return action.payload;
        case "removeItem":
            return action.payload;

        default:
            return state;
    }
}