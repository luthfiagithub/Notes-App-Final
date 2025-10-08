import React, { useContext} from "react";
import { useLocation } from "react-router-dom";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";

function AuthButton({ label, type = "submit", onClick }) {
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
    <button
      type="submit"
      className="auth-button"
      onClick={onClick}
    >
      {t.labelButton}
    </button>
  );
}


export default AuthButton;
