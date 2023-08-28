import { FunctionComponent } from "react";
import Header from "./Header";
import styles from "./MainHeader.module.css";
const MainHeader: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <Header
        chevLeftMed="/chev-leftmed1.svg"
        title="Make this OCBC Business Credit Card yours"
        desc="Ref no.: 123456"
        chevDownMed="/chev-downmed2.svg"
        pencil="/pencil3.svg"
        chevDownMed1="/chev-downmed2.svg"
        crossMed="/crossmed1.svg"
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
        headerHeight="unset"
        descColor="rgba(57, 71, 78, 0.7)"
      />
    </div>
  );
};

export default MainHeader;
