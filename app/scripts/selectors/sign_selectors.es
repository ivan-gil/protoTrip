export function getUserInfo(state) {
    return {
        authorized: state.getIn(['authReducer', 'authorized']),
        username: state.getIn(['authReducer', 'username']),
        password: state.getIn(['authReducer', 'password'])
    }
}