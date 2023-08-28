import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateSelectedActiveSizeRe.module.css";

type StateSelectedActiveSizeReType = {
  option?: string;
  showOption?: boolean;

  /** Style props */
  stateSelectedActiveSizeRePosition?: CSSProperties["position"];
};

const StateSelectedActiveSizeRe: FunctionComponent<
  StateSelectedActiveSizeReType
> = ({
  option = "Option",
  showOption = true,
  stateSelectedActiveSizeRePosition,
}) => {
  const stateSelectedActiveSizeReStyle: CSSProperties = useMemo(() => {
    return {
      position: stateSelectedActiveSizeRePosition,
    };
  }, [stateSelectedActiveSizeRePosition]);

  return (
    <div
      className={styles.stateselectedActiveSizere}
      style={stateSelectedActiveSizeReStyle}
    >
      <div className={styles.radio}>
        <div className={styles.circle} />
      </div>
      {showOption && <div className={styles.option}>{option}</div>}
    </div>
  );
};

export default StateSelectedActiveSizeRe;
