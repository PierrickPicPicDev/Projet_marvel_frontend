import Vue from 'vue';
import Router from 'vue-router';
import SuperHeros from "../components/SuperHeros";
import SuperTeam from "../components/SuperTeam";
import TeamComics from "../components/TeamComics";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            name: 'SuperHeros',
            path: "/",
            component: SuperHeros
        },
        {
            name: 'SuperTeam',
            path: "/../SuperTeam",
            component: SuperTeam
        },
        {
            name: 'TeamComics',
            path: "/../TeamComics",
            component: TeamComics
        },
        {
            path: "*",
            redirect: '/'
        }
    ]
});

export default router;
