import React, { useState, useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";

function NoteForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].addNotePage || translations.id;


  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
  }

  function handleBodyIput(e) {
    setBody(e.currentTarget.innerHTML);
  }


  return (
    <form onSubmit={handleSubmit} className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        type="text"
        placeholder={t.titlePlaceholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div
        className="add-new-page__input__body"
        data-placeholder={t.dataPlaceholder}
        contentEditable
        onInput={handleBodyIput}
      />

      <button className="action" type="submit">+</button>

    </form>
  )
}

export default NoteForm;
