import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, { ReactNode } from "react";
import { ThemeColors } from "../../../types";
import { LinkGradientButton } from "../../elements/Button/Button";
import { RoundShadowIcon } from "../../elements/Icon/Icon";

export type ContentProps = {
  children?: ReactNode | ReactNode[];
  title: string;
  color: ThemeColors;
  description?: string;
  subDescription?: string;
  icon?: IconDefinition;
  action?: Action;
};

export type Action = {
  href: string;
  text: string;
};

const Content = ({
  children,
  title,
  color,
  description,
  subDescription,
  icon,
  action,
}: ContentProps) => {
  let descriptionElem = undefined;
  if (description) {
    if (subDescription) {
      descriptionElem = (
        <>
          <h3>{description}</h3>
          <h3 className="mb-4">{subDescription}</h3>
        </>
      );
    } else {
      descriptionElem = <h3 className="mb-4">{description}</h3>;
    }
  }

  return (
    <>
      {icon && <RoundShadowIcon color={color} icon={icon} />}
      <h3 className={"text-gradient mb-0 text-" + color}>{title}</h3>
      {descriptionElem}
      {children}
      {action && (
        <LinkGradientButton href={action.href} color={color}>
          {action.text}
        </LinkGradientButton>
      )}
    </>
  );
};

export { Content };
