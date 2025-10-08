import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import ToggleLocaleButton from "../buttons/ToggleLocaleButton";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";
import LogoutButton from "../buttons/LogoutButton";


function Header({ logout, authedUser }) {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].header || translations.id;
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <header >
      <h1>
        <Link to="/">{t.title}</Link>
      </h1>

      <nav className="navigation">
        <ul>
          <li>
            <ToggleLocaleButton />
          </li>

          <li>
            <ToggleThemeButton />
          </li>

        </ul>
      </nav>


      {!isAuthPage && authedUser && (

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/notes/archived">{t.archived}</Link>
            </li>

            <li>
              <LogoutButton logout={logout} authedUser={authedUser} />
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;