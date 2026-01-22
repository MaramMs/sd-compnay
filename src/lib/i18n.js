import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import arCommon from "../../public/locales/ar/common.json";
import enCommon from "../../public/locales/en/common.json";

const resources = {
  en: {
    common: enCommon,
  },
  ar: {
    common: arCommon,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

// Normalize language codes (e.g., ar-EG -> ar, en-US -> en)
i18n.on("languageChanged", (lng) => {
  const baseLng = lng.split("-")[0]; // Get base language code
  if (baseLng !== lng && i18n.hasResourceBundle(baseLng, "common")) {
    i18n.changeLanguage(baseLng, (err) => {
      if (!err) {
        localStorage.setItem("i18nextLng", baseLng);
      }
    });
  }
});

export default i18n;
