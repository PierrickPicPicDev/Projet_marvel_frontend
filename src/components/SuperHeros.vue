<template>
    <div>
        <h1>Liste Super Héros</h1>

        <table>
            <tr>
                <td>
                    <v-btn color="primary" dark v-on:click="getSuperHeros()"> Afficher</v-btn>
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

                    <v-list-item-content>
                        <v-list-item-title v-html="hero.thumbnail"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content>
                        <v-list-item-title v-html="hero.description"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
    import axios from "axios";

    /*
    const API_PUBLIC_KEY = '650a93f0364e609d8eb2f7aaaebe5400';
    process.env.VUE_APP_MARVEL_API_KEY;
    console.log(API_PUBLIC_KEY);
    const hash = '42c8ff7c372c43e5d33448e06c5668eb';
    console.log(hash);
    import {public_key, secret_key} from "../marvel";
    */

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
            }
            /*
            getSuperHeros: function() {
                axios.get('http://gateway.marvel.com/v1/public/characters?ts=1?apikey=650a93f0364e609d8eb2f7aaaebe5400&hash=42c8ff7c372c43e5d33448e06c5668eb')
                    .then(rep => this.superHeros = rep.data)
                    .catch(() => this.superHeros = [{name: "Loading error"}]);
            }*/

        }
    }
</script>

<style scoped>

</style>
