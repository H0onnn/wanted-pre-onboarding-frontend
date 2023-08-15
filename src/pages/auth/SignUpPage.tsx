/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import useAuthForm from "../../hooks/useAuthForm";
import AuthFields from "../../components/auth/AuthFileds";
import AuthForm from "../../components/auth/AuthForm";
import Button from "../../components/UI/Button";
import { colors } from "../../constant/colors";
import { toast } from "react-hot-toast";
import { signup } from "../../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { useTokenContext } from "../../context/TokenContext";

const SignUpPage = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    emailValid,
    passwordValid,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthForm();

  const { token } = useTokenContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token, navigate]);

  const handleSignupClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailValid || !passwordValid) {
      return;
    }

    const data = { email: email, password: password };
    try {
      await signup(data);
      toast.success("회원가입이 완료되었습니다.", {
        id: "signup-success",
      });
      navigate("/signin");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "회원가입에 실패했습니다.", {
        id: "signup-error",
      });
    }
  };

  return (
    <div css={centerContent}>
      <AuthForm title="회원가입">
        <AuthFields
          email={email}
          password={password}
          emailError={emailError}
          passwordError={passwordError}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
        <Button
          data-testid="signup-button"
          disabled={!emailValid || !passwordValid}
          onClick={handleSignupClick}
          filled
          css={{
            width: "417px",
            height: "43px",
          }}
        >
          회원가입
        </Button>
        <span>이미 회원이신가요?</span>
        <Link
          css={{
            color: colors.primary,
          }}
          to="/signin"
        >
          로그인 하러가기
        </Link>
      </AuthForm>
    </div>
  );
};

export default SignUpPage;

const centerContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
