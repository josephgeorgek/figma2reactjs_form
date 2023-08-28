import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CardFormContainer from "../components/CardFormContainer";
import ContactDetailsForm from "../components/ContactDetailsForm";
import StateActiveOnDarkBGNo2 from "../components/StateActiveOnDarkBGNo2";
import styles from "./ApplyCard.module.css";
const ApplyCard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/apply-card-2");
  }, [navigate]);

  return (
    <div className={styles.applyCard}>
      <img className={styles.backgroundIcon} alt="" src="/background1.svg" />
      <div className={styles.headerParent}>
        <Header
          chevLeftMed="/chev-leftmed2.svg"
          title="Make this Card yours"
          desc="Customise your card"
          chevDownMed="/chev-downmed3.svg"
          pencil="/pencil4.svg"
          chevDownMed1="/chev-downmed3.svg"
          crossMed="/crossmed2.svg"
          showBadge={false}
          showCrossButton={false}
          showSecondaryButton={false}
          showBackButton={false}
          showDropdown={false}
          showPrimaryButton={false}
          showUnderline={false}
          showChevLeftMedIcon={false}
          showDesc={false}
          headerPosition="unset"
          headerHeight="100px"
          descColor="rgba(57, 71, 78, 0.7)"
        />
        <div className={styles.loansSectionParent}>
          <CardFormContainer />
          <ContactDetailsForm />
        </div>
        <div className={styles.footer}>
          <div className={styles.footer1}>
            <StateActiveOnDarkBGNo2
              buttonLabel="Next"
              stateActiveOnDarkBGNoWidth="196.5px"
              stateActiveOnDarkBGNoPosition="unset"
              stateActiveOnDarkBGNoBackground="linear-gradient(-79.44deg, #3d484e, #49565f 50.52%, #5a6a75)"
              stateActiveOnDarkBGNoCursor="pointer"
              onPrimaryButtonContainerClick={onPrimaryButtonContainerClick}
            />
            <div className={styles.thisIsOneLiner}>
              We will not issue the card until the card documentation is
              completed to our satisfaction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
