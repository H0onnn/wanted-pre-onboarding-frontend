import { useState } from "react";

const useValidation = () => {
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const valid = email.includes("@");
    setEmailValid(valid);
    return valid;
  };

  const validatePassword = (password: string): boolean => {
    const valid = password.length >= 8;
    setPasswordValid(valid);
    return valid;
  };

  return {
    emailValid,
    passwordValid,
    validateEmail,
    validatePassword,
  };
};

export default useValidation;
