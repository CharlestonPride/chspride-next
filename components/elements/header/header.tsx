import { ReactNode } from "react";
import { ThemeColors } from "../../../types";
import classNames from "classnames";

type HeaderProps = {
  theme: ThemeColors;
  showGradient?: boolean;
  children: ReactNode;
};

const ThemedHeader1 = ({
  theme,
  showGradient = true,
  children,
}: HeaderProps) => (
  <h1
    className={classNames(
      { "text-gradient": showGradient },
      { [`text-${theme}`]: true }
    )}
  >
    {children}
  </h1>
);

export { ThemedHeader1 };
