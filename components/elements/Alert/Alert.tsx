import { Children, ReactNode } from "react";
import { ThemeGradientColors } from "../../../types";

type Props = {
  color: ThemeGradientColors;
  children?: ReactNode;
};

const Alert = ({ color, children }: Props) => (
  <div className={"alert alert-" + color} role="alert">
    <span className="alert-text">{children}</span>
  </div>
);

export default Alert;
