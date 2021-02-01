import axios from "axios";

export const public_Key = process.env.VUE_APP_MARVEL_API_PUBLIC_KEY;
export const hash = process.env.VUE_APP_MARVEL_API_HASH_KEY;

const state = {
    superHeros: [],
}

const mutations = {
       SET_SUPER_HEROS(state, superHeros) {
        state.superHeros = superHeros
    }
}

const getters = {
    superHeros: (state) => state.superHeros
}
const actions = {

    getSuperHerosFromApiMarvel({commit}) {
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&limit=100&offset=0&apikey=${public_Key}&hash=${hash}`)
            .then(rep => {
                console.log(rep.data.data.results)
                let superHeros = rep.data.data.results
                commit('SET_SUPER_HEROS', superHeros)
            })
            .catch(() => this.superHeros = [{name: "Loading error"}]);
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
