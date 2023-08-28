import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import EmphasisMidHelperTextNo from "../components/EmphasisMidHelperTextNo";
import StateActiveSizeRegularOn from "../components/StateActiveSizeRegularOn";
import StateSelectedActiveSizeRe from "../components/StateSelectedActiveSizeRe";
import StateActiveOnDarkBGNo1 from "../components/StateActiveOnDarkBGNo1";
import StateActiveOnDarkBGNo from "../components/StateActiveOnDarkBGNo";
import styles from "./ApplyCard2.module.css";
const ApplyCard2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSecondaryButtonContainerClick = useCallback(() => {
    navigate("/apply-card");
  }, [navigate]);

  return (
    <div className={styles.applyCard2}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <div className={styles.content}>
        <MainHeader />
        <div className={styles.content1}>
          <div className={styles.businessNature}>
            <div className={styles.titleParent}>
              <div className={styles.title}>Entity details</div>
              <div className={styles.column2Labels}>
                <EmphasisMidHelperTextNo
                  label="Registered name"
                  inputText="Gastronomy Pte Ltd"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Unique Entity No. (UEN)"
                  inputText="2016347449N"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Registered address"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Mailing address"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <div className={styles.labels}>
                  <div className={styles.label}>Bank reference number</div>
                  <div className={styles.inputText}>SMQR211105211774</div>
                </div>
              </div>
            </div>
            <div className={styles.titleParent}>
              <div className={styles.title}>Business structure</div>
              <div className={styles.column1Labels}>
                <EmphasisMidHelperTextNo
                  label="Entity type"
                  inputText="Private Limited"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Primary activity"
                  inputText="General Wholesale Trade"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Secondary activity"
                  inputText="Import Export"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <EmphasisMidHelperTextNo
                  label="Sole Proprietor/Partners/Directors"
                  emphasisMidHelperTextNoPosition="unset"
                  emphasisMidHelperTextNoWidth="unset"
                  emphasisMidHelperTextNoAlignSelf="stretch"
                />
                <div className={styles.labels1}>
                  <div className={styles.label1}>
                    Shareholders (if applicable)
                  </div>
                  <div className={styles.inputText1}>
                    <div className={styles.shareholder}>
                      <p className={styles.jackLee}>Jack Lee</p>
                      <p className={styles.jackLee}>Mary Tan</p>
                    </div>
                    <div className={styles.percentage}>
                      <p className={styles.jackLee}>30%</p>
                      <p className={styles.jackLee}>70%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.titleParent}>
              <div className={styles.title}>Business nature</div>
              <div className={styles.fields}>
                <div className={styles.question}>
                  <div className={styles.title3}>
                    <div className={styles.label2}>
                      We are a property corporation
                    </div>
                    <img className={styles.infoIcon} alt="" src="/info.svg" />
                  </div>
                  <div className={styles.options}>
                    <StateActiveSizeRegularOn
                      option="Yes"
                      showOption
                      stateActiveSizeRegularOnPosition="unset"
                    />
                    <StateSelectedActiveSizeRe
                      option="No"
                      showOption
                      stateSelectedActiveSizeRePosition="unset"
                    />
                  </div>
                </div>
                <div className={styles.question}>
                  <div className={styles.title4}>
                    <div className={styles.label3}>
                      The purpose of the facility applied is for the use of any
                      property corporation or for property-related activities,
                      whether such activities are undertaken by us or our
                      related corporations
                    </div>
                    <img className={styles.infoIcon1} alt="" src="/info.svg" />
                  </div>
                  <div className={styles.options}>
                    <StateActiveSizeRegularOn
                      option="Yes"
                      showOption
                      stateActiveSizeRegularOnPosition="unset"
                    />
                    <StateSelectedActiveSizeRe
                      option="No"
                      showOption
                      stateSelectedActiveSizeRePosition="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer1}>
            <StateActiveOnDarkBGNo1
              buttonLabel="Back"
              stateActiveOnDarkBGNoWidth="196px"
              stateActiveOnDarkBGNoPosition="unset"
              stateActiveOnDarkBGNoCursor="pointer"
              buttonLabelFlex="unset"
              buttonLabelWidth="279px"
              buttonLabelFlexShrink="0"
              onSecondaryButtonContainerClick={onSecondaryButtonContainerClick}
            />
            <StateActiveOnDarkBGNo
              buttonLabel="Next"
              stateActiveOnDarkBGNoWidth="196.5px"
              stateActiveOnDarkBGNoPosition="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCard2;
