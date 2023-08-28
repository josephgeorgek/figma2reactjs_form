import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EmphasisMidHelperTextNo.module.css";

type EmphasisMidHelperTextNoType = {
  label?: string;
  inputText?: string;

  /** Style props */
  emphasisMidHelperTextNoPosition?: CSSProperties["position"];
  emphasisMidHelperTextNoWidth?: CSSProperties["width"];
  emphasisMidHelperTextNoAlignSelf?: CSSProperties["alignSelf"];
};

const EmphasisMidHelperTextNo: FunctionComponent<
  EmphasisMidHelperTextNoType
> = ({
  label,
  inputText,
  emphasisMidHelperTextNoPosition,
  emphasisMidHelperTextNoWidth,
  emphasisMidHelperTextNoAlignSelf,
}) => {
  const emphasisMidHelperTextNoStyle: CSSProperties = useMemo(() => {
    return {
      position: emphasisMidHelperTextNoPosition,
      width: emphasisMidHelperTextNoWidth,
      alignSelf: emphasisMidHelperTextNoAlignSelf,
    };
  }, [
    emphasisMidHelperTextNoPosition,
    emphasisMidHelperTextNoWidth,
    emphasisMidHelperTextNoAlignSelf,
  ]);

  return (
    <div
      className={styles.emphasismidHelperTextno}
      style={emphasisMidHelperTextNoStyle}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.inputText}>{inputText}</div>
    </div>
  );
};

export default EmphasisMidHelperTextNo;
