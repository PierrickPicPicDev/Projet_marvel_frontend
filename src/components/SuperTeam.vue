<template>
    <div class="div-style">
        <v-container class="center-list">
            <v-list dark>
                <v-list-item-group>
                    <v-list-item v-for="hero in teams"
                                 :key="hero.id"
                    >
                        <v-list-item-content >
                            <v-list-item-title v-html="hero.name"></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-img max-height="200"
                                   max-width="200"
                                   v-if="hero.thumbnail"
                                   :src="hero.thumbnail"></v-img>
                        </v-list-item-content>

                        <v-list-item-content>
                            <v-card-text>{{hero.description}}</v-card-text>
                        </v-list-item-content>
                        <v-list-item-content class="d-flex justify-center">
                            <v-btn v-if="hero" color="primary" max-width="140px" dark @click="removeHero(hero)"> {{
                                $t('header.delete') }}
                            </v-btn>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-container>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SuperTeam",
        data: () => {
            return {}
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
            removeHero(hero) {
                this.$store.dispatch('removeHero', hero)
            }
        }
    }
</script>

<style scoped>

</style>
