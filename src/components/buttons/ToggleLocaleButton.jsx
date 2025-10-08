import React, { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import { MdLanguage } from "react-icons/md";
import translations from "../../utils/translations";


function ToggleLocaleButton() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const t = translations[locale].toggleLocaleButton || translations.id;

  return (
    <button
      className="toggle-locale"
      onClick={toggleLocale}
      title={t.title}
    >
      <MdLanguage />
      {locale === "id" ? "ID" : "EN"}
    </button>
  );
}

export default ToggleLocaleButton;