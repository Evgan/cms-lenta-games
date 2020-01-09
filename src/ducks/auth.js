
/**
 * Reducer
 * */
const initialState = {
    isAuthenticated: sessionStorage.getItem('token_auth') !== null,
};