import { createStore } from 'vuex'

const store = createStore({
    state: { isLogin: false },
    mutations: {
        userLogin(state) { state.isLogin = true },
        userLogout(state) { state.isLogin = false },
    },

    // 应用mutations
    actions: {
        //获取登录状态
        setUser({ commit }, flag) { commit("userStatus", flag) },
    }
})

export default store
