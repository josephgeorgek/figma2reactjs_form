import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateFilledActive1 from "./StateFilledActive1";
import StateFilledActive from "./StateFilledActive";
import styles from "./CardSection.module.css";

type CardSectionType = {
  cardTitle?: string;
  personName?: string;
  cardImageId?: string;
  cardDate?: string;
  creditLimitLabel?: string;
  percentageValue?: string;
  cardSubtitleId?: string;
  cardAmountLabel?: string;
  creditLimitValue?: string;
  cardImageSize?: string;
  showIcon?: boolean;
  showFrameDiv?: boolean;

  /** Style props */
  labelAndInputFlex?: CSSProperties["flex"];
  labelAndInputWidth?: CSSProperties["width"];
  contentWidth?: CSSProperties["width"];
  contentFlex?: CSSProperties["flex"];
  propOpacity?: CSSProperties["opacity"];
};

const CardSection: FunctionComponent<CardSectionType> = ({
  cardTitle,
  personName,
  cardImageId,
  cardDate,
  creditLimitLabel,
  percentageValue,
  cardSubtitleId,
  cardAmountLabel,
  creditLimitValue,
  cardImageSize,
  showIcon,
  showFrameDiv,
  labelAndInputFlex,
  labelAndInputWidth,
  contentWidth,
  contentFlex,
  propOpacity,
}) => {
  const stateFilledActive1Style: CSSProperties = useMemo(() => {
    return {
      flex: labelAndInputFlex,
      width: labelAndInputWidth,
    };
  }, [labelAndInputFlex, labelAndInputWidth]);

  const stateFilledActiveStyle: CSSProperties = useMemo(() => {
    return {
      width: contentWidth,
      flex: contentFlex,
    };
  }, [contentWidth, contentFlex]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.titleParent}>
        <b className={styles.title}>{cardTitle}</b>
        <div className={styles.remove}>Remove</div>
      </div>
      <div className={styles.textFieldsParent}>
        <StateFilledActive1
          label="Preferred name on card"
          inputText="Natalie Lee"
          icon="/icon.svg"
          helperText="10/19"
          showIcon={false}
          showHelperText
          helperTextVisible
          stateFilledActivePosition="unset"
          stateFilledActiveWidth="unset"
          stateFilledActiveAlignSelf="stretch"
          stateFilledActiveFlex="1"
        />
        <StateFilledActive
          label="Credit limit"
          inputText="50%"
          icon="/icon1.svg"
          showIcon
          showHelperText={false}
          helperTextVisible={false}
          stateFilledActivePosition="unset"
          stateFilledActiveWidth="144px"
          stateFilledActiveFlex="unset"
        />
        {showFrameDiv && (
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <b className={styles.b}>{cardAmountLabel}</b>
              <div className={styles.of25000}>{creditLimitValue}</div>
            </div>
            <img
              className={styles.icon}
              alt=""
              src={cardImageSize}
              style={iconStyle}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSection;
