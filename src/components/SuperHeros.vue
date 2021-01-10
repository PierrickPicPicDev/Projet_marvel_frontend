<template>
    <div>
        <h1>Liste Super Héros</h1>

        <table>
            <tr>
                <td>
                    <v-btn color="primary" dark v-on:click="getSuperHerosFromApiMarvel()"> Afficher</v-btn>
                </td>
                <td>
                    <v-btn color="secondary" dark v-on:click="getTest()"> Maj</v-btn>
                </td>
            </tr>
        </table>
        <v-list>
            <v-list-item-group>
                <v-list-item v-for="post in posts"
                             :key="post.id">{{post.title}}
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-list>
            <v-list-item-group>
                <v-list-item v-for="hero in superHeros"
                             :key="hero.id"
                             @click="goToDetails(hero)"
                >
                    <v-list-item-content>
                        <v-list-item-title v-html="hero.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar>
                        <v-img v-bind:src="hero.thumbnail.path"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{hero.description}}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
    import axios from "axios";

    export const public_Key = process.env.VUE_APP_MARVEL_API_PUBLIC_KEY;
    export const hash = process.env.VUE_APP_MARVEL_API_HASH_KEY;

    export default {
        name: "SuperHeros",
        data: () => {
            return {
                superHeros: [],
                posts: [],
            }
        },
        methods: {
            getTest: function () {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(rep => this.posts = rep.data)
                    .catch(() => this.posts = [{name: "Loading error"}]);
            },
            getSuperHeros: function () {
                axios.get('/heros')
                    .then(rep => this.superHeros = rep.data)
                    .catch(() => this.superHeros = [{name: "Loading error"}]);
            },
            goToDetails(hero) {
                console.log(hero);
                this.$router.push({name: 'SuperTeam'})
            },

            getSuperHerosFromApiMarvel: function () {
                axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_Key}&hash=${hash}`)

                    .then(rep => this.superHeros = rep.data.data.results)

                    .catch(() => this.superHeros = [{name: "Loading error"}]);
            }
        }
    }
</script>

<style scoped>

</style>
