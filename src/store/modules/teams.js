import Vue from 'vue'
import axios from "axios";

Vue.use(axios);

const state = {
    team: [],
}

const mutations = {
    ADD_HEROS_TO_TEAM: (state, superHeros) => {
            state.team.push(superHeros)
    },
    GET_SUPER_HEROS: (state, team) => {
        team.forEach(hero => state.team.push(hero))
    },
    REMOVE_SUPER_HEROS: (state, superHeros) => {
        let index = state.team.indexOf(superHeros)
        state.team.splice(index,1)
    }
}

const getters = {
    team: (state) => state.team
}

const actions = {
    addHeroToSuperTeam({commit}, superHeros) {
        let hero = {
            name: superHeros.name,
            thumbnail: superHeros.thumbnail.path+'.'+superHeros.thumbnail.extension,
            description: superHeros.description
        }
        console.log(hero)
        if (state.team.filter(h => h.name === superHeros.name).length === 0) {
            axios.post('/heros',hero)
                .then(result => console.log(result.data))
            commit('ADD_HEROS_TO_TEAM', hero)
        }
    },
    getSuperHeros({commit}) {
        axios.get('/heros')
            .then(rep => {
                let team = rep.data
                commit('GET_SUPER_HEROS', team)
            })
            .catch(() => this.team = [{name: "Loading error"}]);
    },
    removeHero({commit}, superHeros) {
        axios.delete(`/heros/${superHeros.name}`)
            .then(result => console.log(result.data))
        commit('REMOVE_SUPER_HEROS', superHeros)
    },

}

export default {
    state,
    mutations,
    getters,
    actions
}
