import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";

function AuthLink({ message, linkText, to }) {
	const location = useLocation();
  const pathname = location?.pathname || "";
  const { locale } = useContext(LocaleContext);
  
  let t;
  if (pathname.includes("register")) {
    t = translations[locale]?.registerPage;
  } else if (pathname.includes("/")) {
    t = translations[locale]?.loginPage;
  } else {
    t = translations[locale];
  }

	return (
		<p>
			{t.message} <Link to={to}>{t.linkText}</Link>
		</p>
	);
}

export default AuthLink;
