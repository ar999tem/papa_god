import  axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5972811c-2976-43d8-a9d0-b68ef85f8cba'
    }
}
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(Response => {
                return Response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('old method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateSAtatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}