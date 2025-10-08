import React, { useContext } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import AuthButton from "./AuthButton";


function RegisterForm({
  name,
  email,
  password,
  confirmPassword,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}) {
  
  return (
    <form onSubmit={onSubmit} className="input-register">
      <InputField
        id="name"
        label="Name"
        translationKey="labelName"
        type="text"
        name="name"
        value={name}
        onChange={onNameChange}
      />
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
      <InputField
        id="confirmPassword"
        label="Confirm Password"
        translationKey="labelConfirmPassword"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <AuthButton  />
    </form>
  );
}

RegisterForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onConfirmPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
