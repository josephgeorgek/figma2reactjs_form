import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveOnDarkBGNo.module.css";

type StateActiveOnDarkBGNoType = {
  buttonLabel?: string;

  /** Style props */
  stateActiveOnDarkBGNoWidth?: CSSProperties["width"];
  stateActiveOnDarkBGNoPosition?: CSSProperties["position"];
};

const StateActiveOnDarkBGNo: FunctionComponent<StateActiveOnDarkBGNoType> = ({
  buttonLabel,
  stateActiveOnDarkBGNoWidth,
  stateActiveOnDarkBGNoPosition,
}) => {
  const stateActiveOnDarkBGNoStyle: CSSProperties = useMemo(() => {
    return {
      width: stateActiveOnDarkBGNoWidth,
      position: stateActiveOnDarkBGNoPosition,
    };
  }, [stateActiveOnDarkBGNoWidth, stateActiveOnDarkBGNoPosition]);

  return (
    <div
      className={styles.stateactiveOnDarkBgno}
      style={stateActiveOnDarkBGNoStyle}
    >
      <div className={styles.buttonLabel}>{buttonLabel}</div>
    </div>
  );
};

export default StateActiveOnDarkBGNo;
