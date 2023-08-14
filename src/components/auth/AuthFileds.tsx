/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constant/colors";

interface AuthFieldsProps {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  handleEmailChange: (value: string) => void;
  handlePasswordChange: (value: string) => void;
}

const AuthFields = ({
  email,
  password,
  emailError,
  passwordError,
  handleEmailChange,
  handlePasswordChange,
}: AuthFieldsProps) => {
  return (
    <>
      <label css={{ margin: "10px" }}>
        <span css={labelTextStyle}>이메일</span>
        <input
          id="email"
          css={[inputStyle, inputSpacing, emailError && errorInputStyle]}
          data-testid="email-input"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        {emailError && <div css={errorTextStyle}>{emailError}</div>}
      </label>
      <label css={{ margin: "10px" }}>
        <span css={labelTextStyle}>비밀번호</span>
        <input
          id="password"
          css={[inputStyle, inputSpacing, passwordError && errorInputStyle]}
          data-testid="password-input"
          type="password"
          value={password}
          placeholder="패스워드를 입력해주세요."
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {passwordError && <div css={errorTextStyle}>{passwordError}</div>}
      </label>
    </>
  );
};

export default AuthFields;

const inputStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 5px;
  outline: none;
  width: 417px;
  height: 43px;

  &:focus {
    border-color: ${colors.primary};
    border-width: 2px;
  }

  &::placeholder {
    padding-left: 5px;
    color: #aaa;
  }
`;

const inputSpacing = css`
  display: block;
  margin-top: 5px;
`;

const labelTextStyle = css`
  margin: 5px;
  font-weight: bold;
`;

const errorInputStyle = css`
  border-color: ${colors.error};

  &:focus {
    border-color: ${colors.error};
    border-width: 2px;
  }
`;

const errorTextStyle = css`
  color: ${colors.error};
  font-size: 12px;
  margin-top: 5px;
  margin-left: 3px;
`;
