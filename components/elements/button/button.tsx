import Link from "next/link";
import { ReactNode } from "react";
import { ThemeColors } from "../../../types";

type ButtonProps = {
  color: ThemeColors;
  children?: ReactNode;
};

type LinkButtonProps = ButtonProps & {
  href: string;
};

const Button = ({ color, children }: ButtonProps) => (
  <button type="button" className={"btn btn-" + color}>
    {children}
  </button>
);

const LinkButton = ({ color, children, href }: LinkButtonProps) => (
  <Link href={href} passHref>
    <button type="button" className={"me-1 btn btn-" + color}>
      {children}
    </button>
  </Link>
);

const GradientButton = ({ color, children }: ButtonProps) => (
  <button type="button" className={"btn bg-gradient-" + color}>
    {children}
  </button>
);

const LinkGradientButton = ({ color, children, href }: LinkButtonProps) => (
  <Link href={href} passHref>
    <button type="button" className={"me-1 btn bg-gradient-" + color}>
      {children}
    </button>
  </Link>
);

const OutlineButton = ({ color, children }: ButtonProps) => (
  <button type="button" className={"btn btn-outline-" + color}>
    {children}
  </button>
);

export {
  Button,
  GradientButton,
  OutlineButton,
  LinkButton,
  LinkGradientButton,
};
