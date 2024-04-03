import { createI18n, Locale } from "vue-i18n";
import ru from "../locales/ru.json";
import kz from "../locales/kz.json";
import { saveLang, getLang } from '~/composables/store';

export default defineNuxtPlugin(({ vueApp }) => {
  const storedLang = getLang() || "ru";

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: storedLang,
    messages: {
      ru,
			kz
    },
  });
  vueApp.use(i18n);
});
