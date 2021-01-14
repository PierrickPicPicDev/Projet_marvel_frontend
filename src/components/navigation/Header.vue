<template>
    <scroll-fixed-header :fixed.sync="fixed">
        <div>
            <v-app-bar height="100" bottom dark color="black">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>{{$t('header.heroes')}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <Table>
                    <tr>
                        <td v-if="isHeros">
                            <v-btn color="red" @click="goToSuperTeam()">{{ $t('header.team') }}</v-btn>
                        </td>
                        <td v-else>
                            <v-btn color="primary" dark @click="goToDisplayHome()">{{ $t('header.addHero') }}</v-btn>
                        </td>
                    </tr>
                </Table>
                <v-toolbar-items>
                    <FlagInternation/>
                </v-toolbar-items>
                <template v-slot:extension>
                    <v-tabs v-if="!isHeros" align-with-title>
                        <v-tabs-slider color="#F0E68C"></v-tabs-slider>
                        <v-tab @click="goToSuperTeam()">Ma super Teams</v-tab>
                        <v-tab @click="goToComics()" >Comics</v-tab>
                    </v-tabs>
                </template>
            </v-app-bar>
            <v-navigation-drawer app v-model="drawer" color="red" temporary>
                <v-subheader class="drawer-title">Actions</v-subheader>
                <v-list-item-group v-model="selectedItem" color="white">
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon" color="white"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-navigation-drawer>
        </div>
    </scroll-fixed-header>
</template>

<script>
    import FlagInternation from "../others/FlagInternation";

    export default {
        name: "Header",
        components: {
            FlagInternation
        },
        data: () => {
            return {
                drawer: false,
                fixed: false,
                selectedItem: 0,
                isHeros: true,
                isTeam: true,
                items: [
                    {text: 'Action 1', icon: 'mdi-view-dashboard'},
                    {text: 'Action 2', icon: 'mdi-account'},
                    {text: 'Action 3', icon: 'mdi-flag'},
                ]
            }
        },
        methods: {
            goToSuperTeam() {
                this.$router.push({name: 'SuperTeam'})
                //this.$router.push({name: 'TeamComics'})
                this.isHeros = false;
            },
            goToDisplayHome() {
                this.$router.push({name: 'SuperHeros'})
                this.isHeros = true;
                this.isTeam = true;
            },
            goToComics() {
                this.$router.push({name: 'TeamComics'})
            }
        }
    }
</script>

<style scoped>
    .drawer-title {
        font-size: 30px;
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 20px;
    }
</style>
