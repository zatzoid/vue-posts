export const userModule = {
    state: () => ({
        currentUser: null,
        isLoggined: false

    }),
    mutations: {
        setUserData(state, data) {
            state.currentUser = data
            state.isLoggined = true
        }
    },
    namespaced: true
}