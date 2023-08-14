/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import useAuthForm from "../../hooks/useAuthForm";
import AuthFields from "../../components/auth/AuthFileds";
import AuthForm from "../../components/auth/AuthForm";
import Button from "../../components/UI/Button";
import { colors } from "../../constant/colors";
import { toast } from "react-hot-toast";
import { signin } from "../../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { useTokenContext } from "../../context/TokenContext";

const SignInPage = () => {
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

  const { token, saveTokenLocalStorage } = useTokenContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token, navigate]);

  const handleSigninClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailValid || !passwordValid) {
      return;
    }

    const data = { email: email, password: password };
    try {
      const response = await signin(data);
      console.log(response);
      const token = response.data.access_token;
      saveTokenLocalStorage(token);
      toast.success("정상적으로 로그인 되었습니다.", {
        id: "signin-success",
      });
      navigate("/todo");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "이메일 또는 패스워드를 확인해주세요.",
        {
          id: "signin-error",
        }
      );
    }
  };

  return (
    <div css={centerContent}>
      <AuthForm title="로그인">
        <AuthFields
          email={email}
          password={password}
          emailError={emailError}
          passwordError={passwordError}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
        <Button
          data-testid="signin-button"
          disabled={!emailValid || !passwordValid}
          onClick={handleSigninClick}
          filled
          css={{
            width: "417px",
            height: "43px",
          }}
        >
          로그인
        </Button>
        <span>아직 회원이 아니신가요?</span>
        <Link
          css={{
            color: colors.primary,
          }}
          to="/signup"
        >
          회원가입 하기
        </Link>
      </AuthForm>
    </div>
  );
};

export default SignInPage;

const centerContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
