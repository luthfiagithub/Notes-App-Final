import React, { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";


function EmptyState({ message }) {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale]?.emptyState || translations.id.emptyState;
  const displaymessage = message || t.message;
  
  return (
    <div className="notes-list-empty">
      <p>{displaymessage}</p>
    </div>
  );
}


export default EmptyState;