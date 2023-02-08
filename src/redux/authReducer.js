// import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const set_user_data = 'set_user_data'
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_user_data:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: set_user_data, payload: { userId, email, login, isAuth } })

    export const getAuthUserData = () => (dispath) => {
 return   authAPI.me().then(Response => {
        if (Response.data.resultCode === 0) {
            let { id, email, login } = Response.data.data
            dispath(setAuthUserData(id, email, login, true))
        }
    }
    )
}
export const login = (email, password, rememberMe) => (dispath) => {
    authAPI.login(email, password, rememberMe).then(Response => {
        if (Response.data.resultCode === 0) {
            dispath(getAuthUserData() )
        } else{
       let message=  Response.data.messages.length >0 ? Response.data.messages[0 ] : 'Some error'
            // dispath(stopSubmit('login', {_error: message}) )
        }
    }
    )}
export const logout = () => (dispath) => {
    authAPI.logout().then(Response => {
        if (Response.data.resultCode === 0) {
            dispath(setAuthUserData(null, null, null, false))
        }
    }
    )
}
export default authReducer