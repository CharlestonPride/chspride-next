import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThemeColors } from "../../../types";

type IconProps = {
  color: ThemeColors;
  icon: IconName;
};

const RoundShadowIcon = (props: IconProps) => {
  const lookup: IconLookup = { prefix: "fas", iconName: props.icon };
  const iconDefinition: IconDefinition = findIconDefinition(lookup);
  return (
    <div
      className={
        "icon icon-shape text-white rounded-circle shadow text-center mb-2 bg-gradient-" +
        props.color
      }
    >
      <FontAwesomeIcon icon={iconDefinition} size="lg" />
    </div>
  );
};

export { RoundShadowIcon };
