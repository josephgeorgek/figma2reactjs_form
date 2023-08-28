import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DescriptionYes.module.css";

type DescriptionYesType = {
  label?: string;
  description?: string;
  showDesc?: boolean;

  /** Style props */
  descriptionYesPosition?: CSSProperties["position"];
  descColor?: CSSProperties["color"];
};

const DescriptionYes: FunctionComponent<DescriptionYesType> = ({
  label = "Label",
  description = "Description",
  showDesc,
  descriptionYesPosition,
  descColor,
}) => {
  const descriptionYesStyle: CSSProperties = useMemo(() => {
    return {
      position: descriptionYesPosition,
    };
  }, [descriptionYesPosition]);

  const descStyle: CSSProperties = useMemo(() => {
    return {
      color: descColor,
    };
  }, [descColor]);

  return (
    <div className={styles.descriptionyes} style={descriptionYesStyle}>
      <div className={styles.title}>
        <b className={styles.title1}>{label}</b>
        {showDesc && (
          <div className={styles.desc} style={descStyle}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionYes;
