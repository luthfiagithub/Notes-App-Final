import React, { createContext, useEffect, useState } from "react";


export const LocaleContext = createContext();

function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem("locale");
    return saved ? saved : "id";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  function toggleLocale() {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  }

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;