import { ReactNode } from "react";
import { ThemeGradientColors } from "../../../types";

type Props = {
  color: ThemeGradientColors;
  children?: ReactNode;
};

const Button = ({ color, children }: Props) => (
  <button type="button" className={"btn btn-" + color}>
    {children}
  </button>
);

const GradientButton = ({ color, children }: Props) => (
  <button type="button" className={"btn bg-gradient-" + color}>
    {children}
  </button>
);

const OutlineButton = ({ color, children }: Props) => (
  <button type="button" className={"btn btn-outline-" + color}>
    {children}
  </button>
);

export { Button, GradientButton, OutlineButton };
