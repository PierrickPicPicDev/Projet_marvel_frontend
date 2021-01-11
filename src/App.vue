<template>
    <v-app>
        <Header></Header>
        <router-view></router-view>
    </v-app>
</template>

<script>

    import Header from "./components/navigation/Header";
    export default {
        name: 'App',
        components: {Header},
        data: () => ({}),
    };
</script>

<style>
    @import "./styles/style.css";
</style>
