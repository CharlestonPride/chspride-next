import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThemeColors } from "../../../types";

type IconProps = {
  color: ThemeColors;
  icon: IconDefinition;
};

const RoundShadowIcon = (props: IconProps) => {
  return (
    <div
      className={
        "icon icon-shape text-white rounded-circle shadow text-center mb-2 bg-gradient-" +
        props.color
      }
    >
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </div>
  );
};

export { RoundShadowIcon };
