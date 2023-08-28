import { FunctionComponent } from "react";
import DividersContentDividersThin from "./DividersContentDividersThin";
import StateFilledActive1 from "./StateFilledActive1";
import StateFilledActive from "./StateFilledActive";
import StateSelectedActiveSizeRe from "./StateSelectedActiveSizeRe";
import CardContainer from "./CardContainer";
import styles from "./CardFormContainer.module.css";
const CardFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.loansSection}>
      <div className={styles.title}>Card details</div>
      <div className={styles.dividerscontentDividersthinParent}>
        <DividersContentDividersThin
          showFill={false}
          dividersContentDividersThWidth="unset"
          dividersContentDividersThAlignSelf="stretch"
        />
        <div className={styles.frameParent}>
          <div className={styles.descriptionWrapper}>
            <b className={styles.description}>You are eligible for 2 cards</b>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.titleTooltipParent}>
              <div className={styles.titleTooltip}>
                <div className={styles.preferredCreditLimit}>
                  Preferred credit limit (SGD)
                </div>
                <img className={styles.icon} alt="" src="/icon2.svg" />
              </div>
              <div className={styles.textFields}>
                <div className={styles.content}>
                  <div className={styles.labelAndInput}>
                    <div className={styles.transferMoneyParent}>
                      <b className={styles.transferMoney}>Transfer Details</b>
                      <div className={styles.minusParent}>
                        <img
                          className={styles.minusIcon}
                          alt=""
                          src="/minus.svg"
                        />
                        <b className={styles.inputText}>25,000</b>
                        <img
                          className={styles.minusIcon}
                          alt=""
                          src="/plus.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.helperText}>
                  <div className={styles.helperText1}>18/19</div>
                </div>
              </div>
            </div>
            <div className={styles.titleTooltipParent}>
              <div className={styles.titleTooltip}>
                <div className={styles.preferredCreditLimit}>
                  Entity name on card
                </div>
                <img className={styles.icon} alt="" src="/icon2.svg" />
              </div>
              <div className={styles.textFieldsParent}>
                <div className={styles.textFields1}>
                  <div className={styles.content1}>
                    <div className={styles.labelAndInput}>
                      <div className={styles.transferMoneyParent}>
                        <b className={styles.transferMoney}>Transfer Details</b>
                        <div className={styles.inputTextWrapper}>
                          <div className={styles.inputText1}>
                            Gastronomy Pte Ltd
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.helperText}>
                    <div className={styles.helperText1}>18/19</div>
                  </div>
                </div>
                <div className={styles.helperText4}>
                  <div className={styles.helperText5}>18/19</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardBreakdown}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameDiv}>
                  <div className={styles.titleWrapper}>
                    <b className={styles.b}>Card 1 - Natalie Lee Xin Mei</b>
                  </div>
                  <div className={styles.toastIconsParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/toast-icons.svg"
                    />
                    <div className={styles.radio}>
                      <div className={styles.option}>
                        <span className={styles.optionTxt}>
                          <p className={styles.loremIpsum}>Lorem ipsum</p>
                          <p className={styles.loremIpsum}>Lorem ipsum</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textFieldsGroup}>
                  <StateFilledActive1
                    label="Preferred name on card"
                    inputText="Natalie Lee"
                    icon="/icon3.svg"
                    helperText="10/19"
                    showIcon={false}
                    showHelperText
                    helperTextVisible
                    stateFilledActivePosition="unset"
                    stateFilledActiveWidth="416px"
                    stateFilledActiveAlignSelf="stretch"
                    stateFilledActiveFlex="unset"
                  />
                  <StateFilledActive
                    label="Preferred credit limit (SGD)"
                    inputText="15,000"
                    icon="/chev-downmed3.svg"
                    showIcon={false}
                    showHelperText={false}
                    helperTextVisible={false}
                    stateFilledActivePosition="unset"
                    stateFilledActiveWidth="unset"
                    stateFilledActiveFlex="1"
                  />
                  <div className={styles.frameParent2}>
                    <div className={styles.parent}>
                      <b className={styles.b}>≈ 12,500 SGD</b>
                      <div className={styles.of25000}>of 25,000 SGD</div>
                    </div>
                    <img className={styles.icon} alt="" src="/icon3.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.radioParent}>
                <StateSelectedActiveSizeRe
                  option="Visa Spend Clarity Administrator"
                  showOption
                  stateSelectedActiveSizeRePosition="unset"
                />
                <img className={styles.infoIcon} alt="" src="/info1.svg" />
              </div>
            </div>
          </div>
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default CardFormContainer;
