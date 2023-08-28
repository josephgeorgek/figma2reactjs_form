import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DividersContentDividersThin.module.css";

type DividersContentDividersThinType = {
  showFill?: boolean;

  /** Style props */
  dividersContentDividersThWidth?: CSSProperties["width"];
  dividersContentDividersThAlignSelf?: CSSProperties["alignSelf"];
};

const DividersContentDividersThin: FunctionComponent<
  DividersContentDividersThinType
> = ({
  showFill,
  dividersContentDividersThWidth,
  dividersContentDividersThAlignSelf,
}) => {
  const dividersContentDividersThinStyle: CSSProperties = useMemo(() => {
    return {
      width: dividersContentDividersThWidth,
      alignSelf: dividersContentDividersThAlignSelf,
    };
  }, [dividersContentDividersThWidth, dividersContentDividersThAlignSelf]);

  return (
    <div
      className={styles.dividerscontentDividersthin}
      style={dividersContentDividersThinStyle}
    >
      {showFill && <div className={styles.fill} />}
    </div>
  );
};

export default DividersContentDividersThin;
