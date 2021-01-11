<template>
    <div>
        <v-app-bar height="100" bottom dark color="#263238">
            <h1>{{title}}</h1>

        </v-app-bar>
    </div>
</template>

<script>

    export default {
        name: "Header",
        data: () => {
            return {
                title: "Les Super Héros"
            }
        },
    }
</script>

<style scoped>

</style>
