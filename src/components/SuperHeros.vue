<template>
    <div class="div-style">
        <v-container class="center-list" fluid>
            <v-list dark>
                <v-list-item-group>
                    <v-list-item v-for="hero in superHeros"
                                 :key="hero.id"
                                 @click="addHeroToSuperTeam(hero)"
                                 width="100px"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-html="hero.name"></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-img max-height="200"
                                   max-width="200"
                                   v-if="hero.thumbnail"
                                   :src="hero.thumbnail.path+'.'+hero.thumbnail.extension"></v-img>
                        </v-list-item-content>

                        <v-list-item-content>
                            <v-card-text>{{hero.description}}</v-card-text>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "SuperHeros",
        data: () => {
            return {}
        },
        mounted() {
            this.$store.dispatch('getSuperHerosFromApiMarvel')
        },
        computed: {
            ...mapGetters([
                'superHeros'
            ])
        },
        methods: {
            addHeroToSuperTeam(superHeros) {
                this.$store.dispatch('addHeroToSuperTeam', superHeros)
            },
        }
    }
</script>

<style scoped>

</style>
