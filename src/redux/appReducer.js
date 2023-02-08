import { getAuthUserData } from "./authReducer"

const initialized_success = 'initialized_success'
let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case initialized_success:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
const initializedSuccess = () =>
    ({ type: initialized_success })

export const initializeApp = () => (dispath) => {
    let promise = dispath(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispath(initializedSuccess())
    })

}
export default appReducer