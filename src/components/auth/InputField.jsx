import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import translations from "../../utils/translations";
import { LocaleContext } from "../../context/LocaleContext";


function InputField({ id, label, type, translationKey, name, value, onChange }) {
  const location = useLocation();
  const pathname = location?.pathname || "";
  const { locale } = useContext(LocaleContext);
  
  let t;
  if (pathname.includes("register")) {
    t = translations[locale]?.registerPage;
  } else if (pathname.includes("login")) {
    t = translations[locale]?.loginPage;
  } else {
    t = translations[locale];
  }
  const displayLabel = translationKey ? t[translationKey] : label;

  return (
    <div className="input-field">
      <label htmlFor={id}>
        {displayLabel}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  translationKey: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

InputField.defaultProps = {
  type: "text",
  name: "",
  label: "",
  translationKey: "",
};

export default InputField;