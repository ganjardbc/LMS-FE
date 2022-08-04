export default {
    namespaced: true,
    state: {
        isGridView: true,
        activeIndex: 0,
    },
    getters: {},
    mutations: {
        setActiveIndex (state, data) {
            state.activeIndex = data 
        }
    },
    actions: {
        onActiveIndex ({ state, commit }, data) {
            commit('setActiveIndex', data)
        },
    }
}