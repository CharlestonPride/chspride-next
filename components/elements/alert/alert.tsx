import { ReactNode } from "react";
import { ThemeColors } from "../../../types";

type Props = {
  color: ThemeColors;
  children?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  show?: boolean;
};

const Alert = ({
  show,
  color,
  children,
  onDismiss,
  dismissible = false,
}: Props) => {
  if (show) {
    return (
      <div
        className={`alert alert-${color} ${
          dismissible ? "alert-dismissible" : ""
        }`}
        role="alert"
      >
        <span className="alert-text">{children}</span>
        {dismissible && (
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onDismiss}
          ></button>
        )}
      </div>
    );
  }
  return <></>;
};
export default Alert;
