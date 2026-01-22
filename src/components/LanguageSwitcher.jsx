"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { changeLanguage, currentLanguage, mounted, isRTL } = useLanguage();
  const { i18n } = useTranslation();

  if (!mounted) return null;

  return (
    <div className="flex gap-2 items-center">
      {isRTL ? (
        <button
          onClick={() => changeLanguage("en")}
          className='border border-[#D328EC] px-4! py-2! bg-transparent rounded-md text-[#FCFCFC] hover:bg-[#D328EC] hover:text-white transition-all'
         
        >
          EN
        </button>
      ) : (
        <button
          onClick={() => changeLanguage("ar")}
                  className='border border-[#D328EC] px-4! py-2! bg-transparent rounded-md text-[#FCFCFC] hover:bg-[#D328EC] hover:text-white transition-all'

        >
          ar
        </button>
      )}
    </div>
  );
}
