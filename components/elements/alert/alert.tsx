import { ReactNode } from "react";
import { ThemeColors } from "../../../types";

type Props = {
  color: ThemeColors;
  children?: ReactNode;
};

const Alert = ({ color, children }: Props) => (
  <div className={"alert alert-" + color} role="alert">
    <span className="alert-text">{children}</span>
  </div>
);

export default Alert;
