import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import header from './modules/header'
import heros from './modules/heros'
import teams from './modules/teams'

Vue.use(Vuex,axios)

const index = new Vuex.Store({
    modules: {
        header,
        heros,
        teams
    }
})

export default index
