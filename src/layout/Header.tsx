/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../components/UI/Button";
import { colors } from "../constant/colors";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTokenContext } from "../context/TokenContext";

const Header = () => {
  const navigate = useNavigate();
  const { token: isLoggedin, removeTokenLocalStorage } = useTokenContext();

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogoutClick = () => {
    removeTokenLocalStorage();
    toast.success("정상적으로 로그아웃 되었습니다.", {
      id: "logout-success",
    });
    navigate("/signin");
  };

  return (
    <div css={headerContainer}>
      <div css={headerBox}>
        <span css={headerTitle}>Todo-List</span>
        {isLoggedin ? (
          <Button disabled={false} onClick={handleLogoutClick}>
            로그아웃
          </Button>
        ) : (
          <div
            css={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Button disabled={false} onClick={handleSignInClick}>
              로그인
            </Button>
            <Button disabled={false} onClick={handleSignUpClick} filled>
              회원가입
            </Button>
          </div>
        )}
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
  width: 53rem;
  margin: 0 auto;
`;

const headerTitle = css`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  text-align: center;
`;

export default Header;
