import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import AuthButton from "./AuthButton";


function LoginForm({ 
  email, 
  password, 
  onEmailChange, 
  onPasswordChange, 
  onSubmit 
}) {
  return (
    <form onSubmit={onSubmit} className="input-login">
      <InputField
        id="email"
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={onEmailChange}
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onPasswordChange}
      />
      <AuthButton />
    </form>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


export default LoginForm;