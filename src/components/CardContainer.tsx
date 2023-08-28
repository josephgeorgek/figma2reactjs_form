import { FunctionComponent } from "react";
import CardSection from "./CardSection";
import StateActiveSizeRegularOn from "./StateActiveSizeRegularOn";
import styles from "./CardContainer.module.css";
const CardContainer: FunctionComponent = () => {
  return (
    <div className={styles.cardBreakdown}>
      <div className={styles.frameParent}>
        <CardSection
          cardTitle="Card 2 - Daniel Lim See Gan"
          personName="Daniel Lim"
          cardImageId="/icon3.svg"
          cardDate="9/19"
          creditLimitLabel="Preferred credit limit (SGD)"
          percentageValue="10,000"
          cardSubtitleId="/chev-downmed3.svg"
          cardAmountLabel="≈ 12,500 SGD"
          creditLimitValue="of 25,000 SGD"
          cardImageSize="/icon4.svg"
          showIcon={false}
          showFrameDiv={false}
          labelAndInputFlex="unset"
          labelAndInputWidth="416px"
          contentWidth="unset"
          contentFlex="1"
          propOpacity="0"
        />
        <div className={styles.radioParent}>
          <StateActiveSizeRegularOn
            option="Visa Spend Clarity Administrator"
            showOption
            stateActiveSizeRegularOnPosition="unset"
          />
          <img className={styles.infoIcon} alt="" src="/info1.svg" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
