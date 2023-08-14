/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../components/UI/Button";

const Header = () => {
  const handleSignInClick = () => {};

  const handleSignUpClick = () => {};

  return (
    <div css={headerContainer}>
      <div css={headerBox}>
        <span css={headerTitle}>Todo-List</span>
        <div
          css={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button onClick={handleSignInClick}>로그인</Button>
          <Button onClick={handleSignUpClick} filled>
            회원가입
          </Button>
        </div>
      </div>
    </div>
  );
};

const headerContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const headerBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 73rem;
  margin: 0 auto;
`;

const headerTitle = css`
  font-size: 24px;
  font-weight: bold;
  color: #71c9ce;
  text-align: center;
`;

export default Header;
