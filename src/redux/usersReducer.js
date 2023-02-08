import { usersAPI } from "../api/api"

const Follow = 'follow'
const Unfollow = 'unFollow'
const set_users = 'setUsers'
const set_current_page = 'setCurrentPage'
const set_Total_UsersCount = 'setTotalUsersCount'
const toogle_is_fetching = 'toogle_is_fetching'
const following_In_Progress = 'following_In_Progress'
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case Unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case set_users: {
            return {
                ...state,
                users: action.users
            }
        }
        case set_current_page: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case set_Total_UsersCount: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case toogle_is_fetching: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case following_In_Progress: {
            return {
                ...state,
                followingInProgress: action.progress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const toogleFollowingInProgress = (progress, userId) => ({ type: following_In_Progress, progress, userId })
export const toogleIsFetching = (isFetching) => ({ type: toogle_is_fetching, isFetching })
export const setTotalUsersCount = (totalUsersCount) => ({ type: set_Total_UsersCount, totalUsersCount })
export const followSuccess = (userId) => ({ type: Follow, userId })
export const setCurrentPage = (currentPage) => ({ type: set_current_page, currentPage })
export const unfollowSuccess = (userId) => ({ type: Unfollow, userId })
export const setUsers = (users) => ({ type: set_users, users })
export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        usersAPI.follow(userId).then(Response => {
            if (Response.data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toogleFollowingInProgress(false, userId))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        usersAPI.unfollow(userId).then(Response => {
            if (Response.data.resultCode == 0) {
                dispatch(unfollowSuccess((userId)))
            }
            dispatch(toogleFollowingInProgress(false, userId))
        })
    }
}
export default usersReducer