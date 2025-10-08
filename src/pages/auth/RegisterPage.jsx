import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { register } from "../../utils/network-data";
import PropTypes from "prop-types";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthLink from "../../components/auth/AuthLink";
import translations from "../../utils/translations";
import { LocaleContext } from "../../context/LocaleContext";
import { showModal } from "../../components/ui/Modal";



function RegisterPage() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].registerPage || translations.id

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      await showModal({
        type: "error",
        title: t.titleErrorPassword,
        text: t.textErrorPassword,
      });
      return;
    }
    const { error } = await register({ name, email, password, confirmPassword });
    if (!error) {
      await showModal({
        type: "success",
        title: t.titleSuccess,
        text: t.textSuccess,
      });
      navigate("/");
    } else {
      showModal({
        type: "error",
        title: t.titleErrorEmail,
        text: t.textErrorEmail,

      });
    }
  }

  return (
    <section className="register-page">
      <div className="register-container">
        <h2>{t.title}</h2>
        <RegisterForm
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onConfirmPasswordChange={onConfirmPasswordChange}
          onSubmit={onSubmitHandler}
        />
        <AuthLink to="/" />
      </div>
    </section>
  );

}


export default RegisterPage;
