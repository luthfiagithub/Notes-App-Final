import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/buttons/BackButton";
import NotFoundImg from "../assets/NotFoundImg.png";
import translations from "../utils/translations";
import { LocaleContext } from "../context/LocaleContext";


function NotFoundPage() {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].notFoundPage || translations.id;

  return (
    <div className="notfound-container">
      <img className="notfound-img" src={NotFoundImg} alt="404 Image" />
      <h1 className="notfound-title">{t.title}</h1>
      <p className="notfound-message">
        {t.message}
      </p>
      <Link className="notfound-back" to="/">
        <span>{t.button}</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;