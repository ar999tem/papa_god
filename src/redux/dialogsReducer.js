const send_message = 'send_message'

let initialState = {
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
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case send_message:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: send_message, newMessageBody })
export default dialogsReducer