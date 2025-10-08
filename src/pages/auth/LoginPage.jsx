import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { login, putAccessToken } from '../../utils/network-data';
import AuthLink from "../../components/auth/AuthLink";
import LoginForm from "../../components/auth/LoginForm";
import translations from "../../utils/translations";
import { LocaleContext } from "../../context/LocaleContext";
import { showModal } from "../../components/ui/Modal";


function LoginPage({ loginSuccess }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].loginPage || translations.id;

  async function onSubmitHandler(e) {
    e.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
      loginSuccess(data);
      await showModal({
        type: "success",
        title: t.titleAlert,
        text: t.textAlert,
        // confirmText: t.confirmTextAlert,
      });
      navigate('/');
    }
  }

  return (
    <section className="login-page">

      <div className="login-container">

        <h2>{t.title}</h2>
        <LoginForm
          email={email}
          password={password}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={onSubmitHandler}
        />
        <AuthLink to="/register" />

      </div>
    </section>
  );

}


export default LoginPage;