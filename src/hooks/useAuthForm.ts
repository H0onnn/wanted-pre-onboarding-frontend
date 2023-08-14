import { useState } from "react";
import useValidation from "./useValidation";

const useAuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const { emailValid, passwordValid, validateEmail, validatePassword } =
    useValidation();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("이메일에는 @가 포함되어야 합니다.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError("패스워드는 8글자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    emailValid,
    passwordValid,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useAuthForm;
