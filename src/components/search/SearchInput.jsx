import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";


function SearchInput({ value, onChange }) {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].search || translations.id;

  return (
    <div className="search-bar">
      <span className="search-icon">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder={t.textPlaceholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
