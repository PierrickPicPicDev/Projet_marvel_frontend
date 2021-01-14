<template>
    <div>
        <v-app-bar height="100" bottom dark color="black">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{$t('header.heroes')}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <Table>
                <tr>
                    <td>
                        <v-btn color="red" @click="goToSuperTeam()">{{ $t('header.team') }}</v-btn>
                    </td>
                    <td>
                        <v-btn color="red" @click="goToHome()">{{ $t('header.back') }}</v-btn>
                    </td>
                </tr>
            </Table>
            <v-toolbar-items>
                <FlagInternation/>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" color="red" temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon class="white--text">mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Actions</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
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
                drawer: false
            }
        },
        methods: {
            goToSuperTeam() {
                this.$router.push({name: 'SuperTeam'})
            },
            goToHome() {
                this.$router.push({name: 'SuperHeros'})
            }
        }
    }
</script>

<style scoped>

</style>
