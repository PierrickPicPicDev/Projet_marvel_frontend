import axios from "axios";

export const public_Key = process.env.VUE_APP_MARVEL_API_PUBLIC_KEY;
export const hash = process.env.VUE_APP_MARVEL_API_HASH_KEY;

const state = {
    comics: []
}

const mutations = {
    SET_COMICS(state, comics) {
        state.comics = comics
    }
}

const getters = {
    comics: (state) => state.comics
}

const actions = {
    getComicsFromApiMarvel({commit}) {
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${public_Key}&hash=${hash}`)
            .then(rep => {
                console.log(rep.data.data.results)
                let comics = rep.data.data.results
                commit('SET_COMICS', comics)
            })
            .catch(() => this.comics = [{name: "Loading error"}]);
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
