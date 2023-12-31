import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    supportedLngs:["en","ru","ua"],
    fallback:"ua",
    debug: false,
    backend: {
        loadPath: "/misak-dojo/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
        escapeValue: false
    }
})

i18n.changeLanguage('ua')

export default i18n;



// i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
//     supportedLngs:["en","ru","ua"],
//     fallback:"ua",
//     debug: false,
//     detector: {
//         order: ["queryString", "cookie"],
//         cache: ["cookie"]
//     },
//     backend: {
//         loadPath: "/misak-dojo/locales/{{lng}}/{{ns}}.json",
//     },
//     interpolation: {
//         escapeValue: false
//     }
// })


