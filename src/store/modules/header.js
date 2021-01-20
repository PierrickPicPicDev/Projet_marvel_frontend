

const state = {
    displayBtn: 0
}

const mutations = {
    SET_DISPLAY_BTN(state, btn) {
        state.displayBtn = btn
    }
}

const getters = {
    displayBtn: (state) => state.displayBtn
}
const actions = {
    isDisplayHome ({commit}) {
        commit('SET_DISPLAY_BTN', 0)
    },
    isDisplayTeam ({commit}) {
        commit('SET_DISPLAY_BTN', 1)
    },
    isDisplayComics ({commit}) {
        commit('SET_DISPLAY_BTN', 2)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
