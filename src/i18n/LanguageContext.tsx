import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (typeof translations)["en"] };

const LanguageContext = createContext<Ctx | null>(null);
const KEY = "site-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
    return saved === "he" ? "he" : "en";
  });

  useEffect(() => {
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.title = translations[lang].meta.title;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "en" ? "he" : "en"), t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
