import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you? ', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 11 },
                { id: 3, message: 'sdsd', likesCount: 11 },
                { id: 4, message: 'eeee', likesCount: 11 },
            ],
            newPostText: 'papa'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'papa ' },
                { id: 2, name: 'nikita ' },
                { id: 3, name: 'her ' },
                { id: 4, name: 'popa ' },
                { id: 5, name: 'pena ' },
                { id: 6, name: 'zalupa ' },
            ],
            messages: [
                { id: 1, message: 'hi ' },
                { id: 2, message: 'how are you' },
                { id: 3, message: 'sosat ' },
                { id: 4, message: 'dfd ' },
                { id: 5, message: 'ghg ' },
                { id: 6, message: 'fghfg ' },
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store