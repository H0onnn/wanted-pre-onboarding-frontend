/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  filled?: boolean;
}

const Button = ({ onClick, children, filled = false }: ButtonProps) => {
  return (
    <button css={getButtonStyles(filled)} onClick={onClick}>
      {children}
    </button>
  );
};

const getButtonStyles = (filled: boolean): SerializedStyles => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 43px;
  font-size: 16px;
  border: ${filled ? "none" : "2px solid #71c9ce"};
  border-radius: 10px;
  background-color: ${filled ? "#71c9ce" : "transparent"};
  color: ${filled ? "white" : "#71c9ce"};
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${filled ? "#3FC1C9" : "#71c9ce"};
    color: white;
  }
`;

export default Button;
