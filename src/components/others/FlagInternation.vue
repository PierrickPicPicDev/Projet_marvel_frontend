<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
                <flag :iso="currentFlag" v-bind:squared=false />&nbsp;
                {{ $i18n.locale }}
                <v-icon>arrow_drop_down</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="lang in languages" :key="lang.language" @click="changeLocale(lang.language)">
                <flag :iso="lang.flag" v-bind:squared=false />&nbsp;
                <v-list-item-title>{{ lang.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import Vue from 'vue';
    import FlagIcon from 'vue-flag-icon';

    Vue.use(FlagIcon);

    export default {
        name: 'locale-changer',
        data () {
            return {
                languages: [
                    {
                        flag: 'us',
                        language: 'en',
                        title: 'EN'
                    },
                    {
                        flag: 'fr',
                        language: 'fr',
                        title: 'FR'
                    }
                ]
            }
        },
        computed: {
            currentFlag() {
                let language = this.languages.filter(language => language.language === this.$i18n.locale);
                return language[0].flag;
            },
        },
        methods: {
            changeLocale(locale) {
                localStorage.locale = locale;
                this.$i18n.locale = locale.toLowerCase();
                this.$vuetify.lang.current = locale.toLowerCase();
            }
        }
    }
</script>
