/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  filled?: boolean;
  disabled: boolean;
  [key: string]: any;
}

const Button = ({
  children,
  filled = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={getButtonStyles(filled, disabled)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const getButtonStyles = (
  filled: boolean,
  disabled: boolean
): SerializedStyles => css`
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
  cursor: ${disabled ? "not-allowed" : "pointer"};
  opacity: ${disabled ? 0.5 : 1};

  &:hover {
    background-color: ${disabled
      ? filled
        ? "#71c9ce"
        : "transparent"
      : filled
      ? "#3FC1C9"
      : "#71c9ce"};
    color: ${disabled ? (filled ? "white" : "#71c9ce") : "white"};
  }
`;

export default Button;
