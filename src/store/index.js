import Vue from 'vue'
import Vuex from 'vuex'
import heros from './modules/heros'
import teams from './modules/teams'

Vue.use(Vuex)

const index = new Vuex.Store({
    modules: {
        heros,
        teams
    }
})

export default index
