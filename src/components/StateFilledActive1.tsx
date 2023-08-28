import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateFilledActive1.module.css";

type StateFilledActive1Type = {
  label?: string;
  inputText?: string;
  icon?: string;
  helperText?: string;
  showIcon?: boolean;
  showHelperText?: boolean;
  helperTextVisible?: boolean;

  /** Style props */
  stateFilledActivePosition?: CSSProperties["position"];
  stateFilledActiveWidth?: CSSProperties["width"];
  stateFilledActiveAlignSelf?: CSSProperties["alignSelf"];
  stateFilledActiveFlex?: CSSProperties["flex"];
};

const StateFilledActive1: FunctionComponent<StateFilledActive1Type> = ({
  label = "Label",
  inputText = "Input Text",
  icon,
  helperText = "Helper Text",
  showIcon = true,
  showHelperText = true,
  helperTextVisible,
  stateFilledActivePosition,
  stateFilledActiveWidth,
  stateFilledActiveAlignSelf,
  stateFilledActiveFlex,
}) => {
  const stateFilledActive1Style: CSSProperties = useMemo(() => {
    return {
      position: stateFilledActivePosition,
      width: stateFilledActiveWidth,
      alignSelf: stateFilledActiveAlignSelf,
      flex: stateFilledActiveFlex,
    };
  }, [
    stateFilledActivePosition,
    stateFilledActiveWidth,
    stateFilledActiveAlignSelf,
    stateFilledActiveFlex,
  ]);

  return (
    <div className={styles.statefilledActive} style={stateFilledActive1Style}>
      <div className={styles.content}>
        <div className={styles.labelAndInput}>
          <div className={styles.label}>{label}</div>
          <div className={styles.inputText}>{inputText}</div>
        </div>
        {showIcon && <img className={styles.icon} alt="" src={icon} />}
      </div>
      {showHelperText && (
        <div className={styles.helperText}>
          {helperTextVisible && (
            <div className={styles.helperText1}>{helperText}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StateFilledActive1;
