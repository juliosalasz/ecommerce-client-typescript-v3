import "./ButtonStyles.css";
import { FC } from "react";

// import { ButtonSpinner } from "./buttonStyles";

//types for choosing with button you want
type ButtonProps = {
  children?: JSX.Element | JSX.Element[] | string;
  buttonType?: string;
  isLoading?: boolean;
  onClick?: (() => Promise<void>) | (() => void);
  type?: "submit" | "reset" | "button";
  className?: string;
};
// const BUTTON_TYPE_CLASSES = {
//   google: "googlebtn",
//   signUpLink: "btnChange",
//   cartButton: "cartButton",
//   cartDisplay: "cartDisplay",
//   disabled: "disabled",
//   disabledCart: "disabledCart",
// };

//function will use buttonType as the data for choosing with type of button you want
const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${buttonType}`}
      disabled={isLoading}
      {...otherProps}
    >
      {/* {isLoading ? <ButtonSpinner /> : children} */}
      {children}
    </button>
  );
};
export default Button;
