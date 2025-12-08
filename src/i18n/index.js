import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../i18n/locales/en.json";
import ta from "../i18n/locales/ta.json";
import hi from "../i18n/locales/hi.json";
import de from "../i18n/locales/de.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta },
      hi: { translation: hi },
      de: { translation: de }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
