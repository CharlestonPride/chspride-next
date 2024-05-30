import { IconName } from "@fortawesome/fontawesome-svg-core";
import React, { ReactNode } from "react";
import { ThemeColors } from "../../../types";
import { LinkButton, LinkGradientButton } from "../../elements/button/button";
import { RoundShadowIcon } from "../../elements/icon/icon";
import { Button, Image } from "../../../lib/prepr";

export type ContentProps = {
  children?: ReactNode | ReactNode[];
  title: string;
  color: ThemeColors;
  description?: string;
  subDescription?: string;
  icon?: IconName;
  buttons?: Button[];
  images?: Image[];
};

const Content = ({
  children,
  title,
  color,
  description,
  subDescription,
  icon,
  buttons = [],
  images = []
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
  let imagesElems = undefined;
  if(images.length)
    {
      imagesElems = images.map((image) => {
        if(image.caption)
          {
            return (<><h4>{image.caption}</h4>
            <img src={image.url} className="w-100 mb-2" /></>)
          }
          return (<img src={image.url} className="w-100 mb-2" />)
      })
       
    }

  return (
    <>
      {icon && <RoundShadowIcon color={color} icon={icon} />}
      <h3 className={"text-gradient mb-0 text-" + color}>{title}</h3>
      {descriptionElem}
      {children}

      { buttons.length >=1 && (
        <LinkGradientButton href={buttons[0].href} color={color}>
          {buttons[0].text}
        </LinkGradientButton>
      )}
      {buttons.length >= 2 && (
        <LinkButton href={buttons[1].href} color={color}>
          {buttons[1].text}
        </LinkButton>
      )}

      {imagesElems}
    </>
  );
};

export { Content };
