<template>
    <div>
        <h1>Création d'un Super Héros</h1>
        <br>
        <table>
            <tr>
                <v-text-field
                        label=""
                        placeholder="Name"
                        outlined
                ></v-text-field>
            </tr>
            <tr>
                <v-text-field
                        label=""
                        placeholder="Thumbnail"
                        outlined
                ></v-text-field>
            </tr>
            <tr>
                <v-text-field
                        label=""
                        placeholder="Description"
                        outlined
                ></v-text-field>
            </tr>
            <td>
                <v-btn color="primary" dark v-on:click="createHeros()"> Submit</v-btn>
            </td>
        </table>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SuperTeam",
        data: () => {
            return {
                name: "",
                thumbnail: "",
                description: "",
                superteam: {
                    name: "",
                    heros: {}
                }
            }
        },
        methods: {
            createHeros() {
                if (this.name !== "") {
                    axios.post('/heros', {
                        name: this.name,
                        thumbnail: this.thumbnail,
                        description: this.description,
                        superteam: this.superteam

                    }).then(rep => console.log(rep));
                }
            },
        }
    }
</script>

<style scoped>

</style>
