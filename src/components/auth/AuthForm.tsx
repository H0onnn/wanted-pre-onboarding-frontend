/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constant/colors";

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
}

const AuthForm = ({ title, children }: AuthFormProps) => {
  return (
    <div css={authForm}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const authForm = css`
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${colors.primary};
  gap: 1rem;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 34px;
  }
`;

export default AuthForm;
