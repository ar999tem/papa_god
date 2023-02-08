import { profileAPI, usersAPI } from "../api/api"

const add_post = 'add-post'
const SetUserProfile = 'setUserProfile'
const SetUserStatus = 'SetUserStatus'
const UpdateUserStatus = 'updateUserStatus'
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you? ', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 11 },
        { id: 3, message: 'sdsd', likesCount: 11 },
        { id: 4, message: 'eeee', likesCount: 11 },
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SetUserProfile: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SetUserStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        case UpdateUserStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
const updUserStatus = (status) => ({ type: UpdateUserStatus, status })
const setUserStatus = (status) => ({ type: SetUserStatus, status })
const setUserProfile = (profile) => ({ type: SetUserProfile, profile })

export const getUserProfile = (userId) => {
    return (dispath) => {
        usersAPI.getProfile(userId).then(Response => {
            dispath(setUserProfile(Response.data))
        })
    }
}
export const getUserStatus = (userId) => {
    return (dispath) => {
        profileAPI.getStatus(userId).then(Response => {
            dispath(setUserStatus(Response.data))
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispath) => {
        profileAPI.updateSAtatus(status).then(Response => {
            if (Response.data.resultCode === 0) {
                dispath(updUserStatus(status))
            }
        })
    }
}
export const addPostActionCreator = (newPostText) => ({ type: add_post, newPostText })
export default profileReducer