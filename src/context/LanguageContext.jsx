"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let savedLanguage = localStorage.getItem("i18nextLng") || "en";
    // Normalize language code (e.g., ar-EG -> ar)
    const baseLang = savedLanguage.split("-")[0];
    savedLanguage = baseLang;
    i18n.changeLanguage(savedLanguage);
    setIsRTL(savedLanguage === "ar");
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsRTL(lang === "ar");
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider
      value={{ isRTL, changeLanguage, currentLanguage: i18n.language, mounted }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
