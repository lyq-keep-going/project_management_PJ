import { createStore } from 'vuex'

const store = createStore({
    state: {
        isLogin: false,
        username: ""
    },
    mutations: {
        userLogin(state) { state.isLogin = true },
        userLogout(state) { state.isLogin = false },
        setUsername(state, username) {
            state.username = username
        }
    },
    actions: {

    }
})

export default store
