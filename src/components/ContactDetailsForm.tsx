import { FunctionComponent } from "react";
import EmphasisMidHelperTextNo from "./EmphasisMidHelperTextNo";
import styles from "./ContactDetailsForm.module.css";
const ContactDetailsForm: FunctionComponent = () => {
  return (
    <div className={styles.contactDetailsSection}>
      <div className={styles.title}>
        <div className={styles.title1}>Contact details</div>
      </div>
      <div className={styles.info}>
        <div className={styles.helperText}>
          We will use the details below to contact you for this offer.
        </div>
        <div className={styles.labels}>
          <EmphasisMidHelperTextNo
            label="Contact no."
            inputText="9876 5432"
            emphasisMidHelperTextNoPosition="unset"
            emphasisMidHelperTextNoWidth="379px"
            emphasisMidHelperTextNoAlignSelf="unset"
          />
          <EmphasisMidHelperTextNo
            label="Email"
            inputText="email1@gmail.com"
            emphasisMidHelperTextNoPosition="unset"
            emphasisMidHelperTextNoWidth="379px"
            emphasisMidHelperTextNoAlignSelf="unset"
          />
          <div className={styles.helperText1}>
            <div className={styles.helperText2}>Helper text</div>
          </div>
          <div className={styles.helperText1}>
            <div className={styles.helperText2}>Helper text</div>
          </div>
          <div className={styles.description}>Change contact</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
