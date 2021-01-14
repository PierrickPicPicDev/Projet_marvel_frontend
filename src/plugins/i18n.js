import Vue from 'vue'
import VueI18n from 'vue-i18n';
import en from '../assets/en.json'
import fr from '../assets/fr.json'

Vue.use(VueI18n);

const languages = {
    'en': en,
    'fr': fr,
};
const messages = Object.assign(languages);

const i18n = new VueI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages
});

export default i18n;
