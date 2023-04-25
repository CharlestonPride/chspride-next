import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import {
  LinkGradientButton,
  LinkOutlineButton,
} from "../../elements/button/button";
import { Button } from "../../../lib/prepr";
import { ThemeColors } from "../../../types";
import { ThemedHeader1 } from "../../elements/header/header";

type Props = {
  style: CSSProperties;
  title: string;
  subtitle: string;
  primaryAction: Button;
  secondaryAction: Button;
  theme: ThemeColors;
};
type ActionButtonProps = {
  button: Button;
  theme: ThemeColors;
  primary?: boolean;
};
const ActionButton = ({ button, theme, primary = true }: ActionButtonProps) => {
  if (button && button.name && button.url) {
    if (primary) {
      return (
        <LinkGradientButton color={theme} href={button.url}>
          {button.name}
        </LinkGradientButton>
      );
    }
    return (
      <LinkOutlineButton color={theme} href={button.url}>
        {button.name}
      </LinkOutlineButton>
    );
  }
  return <></>;
};

export default function Header({
  style,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  theme,
}: Props) {
  return (
    <header className="mb-7">
      <div className="page-header section-height-100">
        <div
          className={
            " position-absolute fixed-top ms-auto w-100 w-lg-75 h-100 z-index-0 d-block"
          }
          style={style}
        ></div>
        <Container>
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center flex-column">
              <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                <ThemedHeader1 theme={theme}>{title}</ThemedHeader1>
                {subtitle && <h2>{subtitle}</h2>}
                <div className="buttons">
                  <ActionButton button={primaryAction} theme={theme} />
                  <ActionButton
                    button={secondaryAction}
                    theme={theme}
                    primary={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
