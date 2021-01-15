<template>
    <div class="div-style">
        <v-container class="center-list">
            <v-list max-width="900px" dark>
                <v-list-item-group>
                    <v-list-item v-for="hero in teams"
                                 :key="hero.id"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-html="hero.name"></v-list-item-title>
                        </v-list-item-content>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item v-for="comic in hero.comics" :key="comic.id"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title v-html="comic.name"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-container>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "TeamComics",
        data: () => {
            return {}
        },
        computed: {
            ...mapGetters({
                teams: 'team',
            })
        },
    }

</script>

<style scoped>

</style>
