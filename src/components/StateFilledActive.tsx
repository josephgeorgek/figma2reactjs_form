import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateFilledActive1 from "./StateFilledActive1";
import styles from "./StateFilledActive.module.css";

type StateFilledActiveType = {
  label?: string;
  inputText?: string;
  icon?: string;
  showIcon?: boolean;
  showHelperText?: boolean;
  helperTextVisible?: boolean;

  /** Style props */
  stateFilledActivePosition?: CSSProperties["position"];
  stateFilledActiveWidth?: CSSProperties["width"];
  stateFilledActiveFlex?: CSSProperties["flex"];
};

const StateFilledActive: FunctionComponent<StateFilledActiveType> = ({
  label,
  inputText,
  icon,
  showIcon,
  showHelperText,
  helperTextVisible,
  stateFilledActivePosition,
  stateFilledActiveWidth,
  stateFilledActiveFlex,
}) => {
  const stateFilledActiveStyle: CSSProperties = useMemo(() => {
    return {
      position: stateFilledActivePosition,
      width: stateFilledActiveWidth,
      flex: stateFilledActiveFlex,
    };
  }, [
    stateFilledActivePosition,
    stateFilledActiveWidth,
    stateFilledActiveFlex,
  ]);

  return (
    <div className={styles.statefilledActive} style={stateFilledActiveStyle}>
      <StateFilledActive1
        label="Dropdown fields label"
        inputText="Input Text"
        icon="/icon1.svg"
        helperText="Helper Text"
        showIcon
        showHelperText
        helperTextVisible
        stateFilledActivePosition="unset"
        stateFilledActiveWidth="unset"
        stateFilledActiveAlignSelf="stretch"
        stateFilledActiveFlex="unset"
      />
    </div>
  );
};

export default StateFilledActive;
