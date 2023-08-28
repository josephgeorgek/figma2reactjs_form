import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveOnDarkBGNo2.module.css";

type StateActiveOnDarkBGNo2Type = {
  buttonLabel?: string;

  /** Style props */
  stateActiveOnDarkBGNoWidth?: CSSProperties["width"];
  stateActiveOnDarkBGNoPosition?: CSSProperties["position"];
  stateActiveOnDarkBGNoBackground?: CSSProperties["background"];
  stateActiveOnDarkBGNoCursor?: CSSProperties["cursor"];

  /** Action props */
  onPrimaryButtonContainerClick?: () => void;
};

const StateActiveOnDarkBGNo2: FunctionComponent<StateActiveOnDarkBGNo2Type> = ({
  buttonLabel,
  stateActiveOnDarkBGNoWidth,
  stateActiveOnDarkBGNoPosition,
  stateActiveOnDarkBGNoBackground,
  stateActiveOnDarkBGNoCursor,
  onPrimaryButtonContainerClick,
}) => {
  const stateActiveOnDarkBGNo2Style: CSSProperties = useMemo(() => {
    return {
      width: stateActiveOnDarkBGNoWidth,
      position: stateActiveOnDarkBGNoPosition,
      background: stateActiveOnDarkBGNoBackground,
      cursor: stateActiveOnDarkBGNoCursor,
    };
  }, [
    stateActiveOnDarkBGNoWidth,
    stateActiveOnDarkBGNoPosition,
    stateActiveOnDarkBGNoBackground,
    stateActiveOnDarkBGNoCursor,
  ]);

  return (
    <div
      className={styles.stateactiveOnDarkBgno}
      style={stateActiveOnDarkBGNo2Style}
      onClick={onPrimaryButtonContainerClick}
    >
      <div className={styles.buttonLabel}>{buttonLabel}</div>
    </div>
  );
};

export default StateActiveOnDarkBGNo2;
