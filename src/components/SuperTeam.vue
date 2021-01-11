<template>
    <div>
        <table>
            <tr>
                <td>
                    <v-btn color="primary" dark @click="goToDisplayOne()"> Ajouter un Héros</v-btn>
                </td>
            </tr>
        </table>
        <br>
        <v-list>
            <v-list-item-group>
                <v-list-item v-for="hero in teams"
                             :key="hero.id"
                >
                    <v-list-item-content>
                        <v-list-item-title v-html="hero.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-img max-height="150"
                               max-width="150"
                               v-if="hero.thumbnail"
                               :src="hero.thumbnail"></v-img>
                    </v-list-item-content>

                    <v-list-item-content>
                        <v-list-item-title>{{hero.description}}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-btn color="primary" v-if="hero" dark @click="removeHero(hero)"> Suprimer</v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SuperTeam",
        data: () => {
            return {
            }
        },
        mounted() {
            if (this.teams.length === 0) {
                this.$store.dispatch('getSuperHeros')
            }
        },
        computed: {
            ...mapGetters({
                teams: 'team'
            })
        },
        methods: {
            goToDisplayOne() {
                this.$router.push({name: 'SuperHeros'})
            },
            removeHero(hero) {
                this.$store.dispatch('removeHero',hero)
            }
        }
    }
</script>

<style scoped>

</style>
