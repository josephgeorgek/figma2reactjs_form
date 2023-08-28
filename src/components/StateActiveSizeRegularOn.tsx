import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateActiveSizeRegularOn.module.css";

type StateActiveSizeRegularOnType = {
  option?: string;
  showOption?: boolean;

  /** Style props */
  stateActiveSizeRegularOnPosition?: CSSProperties["position"];
};

const StateActiveSizeRegularOn: FunctionComponent<
  StateActiveSizeRegularOnType
> = ({
  option = "Option",
  showOption = true,
  stateActiveSizeRegularOnPosition,
}) => {
  const stateActiveSizeRegularOnStyle: CSSProperties = useMemo(() => {
    return {
      position: stateActiveSizeRegularOnPosition,
    };
  }, [stateActiveSizeRegularOnPosition]);

  return (
    <div
      className={styles.stateactiveSizeregularOn}
      style={stateActiveSizeRegularOnStyle}
    >
      <div className={styles.radio} />
      {showOption && <div className={styles.option}>{option}</div>}
    </div>
  );
};

export default StateActiveSizeRegularOn;
