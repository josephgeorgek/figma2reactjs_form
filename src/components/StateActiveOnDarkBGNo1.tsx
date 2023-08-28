import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveOnDarkBGNo1.module.css";

type StateActiveOnDarkBGNo1Type = {
  buttonLabel?: string;

  /** Style props */
  stateActiveOnDarkBGNoWidth?: CSSProperties["width"];
  stateActiveOnDarkBGNoPosition?: CSSProperties["position"];
  stateActiveOnDarkBGNoCursor?: CSSProperties["cursor"];
  buttonLabelFlex?: CSSProperties["flex"];
  buttonLabelWidth?: CSSProperties["width"];
  buttonLabelFlexShrink?: CSSProperties["flexShrink"];

  /** Action props */
  onSecondaryButtonContainerClick?: () => void;
};

const StateActiveOnDarkBGNo1: FunctionComponent<StateActiveOnDarkBGNo1Type> = ({
  buttonLabel,
  stateActiveOnDarkBGNoWidth,
  stateActiveOnDarkBGNoPosition,
  stateActiveOnDarkBGNoCursor,
  buttonLabelFlex,
  buttonLabelWidth,
  buttonLabelFlexShrink,
  onSecondaryButtonContainerClick,
}) => {
  const stateActiveOnDarkBGNo1Style: CSSProperties = useMemo(() => {
    return {
      width: stateActiveOnDarkBGNoWidth,
      position: stateActiveOnDarkBGNoPosition,
      cursor: stateActiveOnDarkBGNoCursor,
    };
  }, [
    stateActiveOnDarkBGNoWidth,
    stateActiveOnDarkBGNoPosition,
    stateActiveOnDarkBGNoCursor,
  ]);

  const buttonLabelStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonLabelFlex,
      width: buttonLabelWidth,
      flexShrink: buttonLabelFlexShrink,
    };
  }, [buttonLabelFlex, buttonLabelWidth, buttonLabelFlexShrink]);

  return (
    <div
      className={styles.stateactiveOnDarkBgno}
      style={stateActiveOnDarkBGNo1Style}
      onClick={onSecondaryButtonContainerClick}
    >
      <div className={styles.buttonLabel} style={buttonLabelStyle}>
        {buttonLabel}
      </div>
    </div>
  );
};

export default StateActiveOnDarkBGNo1;
