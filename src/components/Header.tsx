import { FunctionComponent, useMemo, type CSSProperties } from "react";
import DescriptionYes from "./DescriptionYes";
import HeaderDropdownActive from "./HeaderDropdownActive";
import styles from "./Header.module.css";

type HeaderType = {
  chevLeftMed?: string;
  title?: string;
  desc?: string;
  chevDownMed?: string;
  pencil?: string;
  chevDownMed1?: string;
  crossMed?: string;
  showBadge?: boolean;
  showCrossButton?: boolean;
  showSecondaryButton?: boolean;
  showBackButton?: boolean;
  showDropdown?: boolean;
  showPrimaryButton?: boolean;
  showUnderline?: boolean;
  showChevLeftMedIcon?: boolean;
  showDesc?: boolean;

  /** Style props */
  headerPosition?: CSSProperties["position"];
  headerHeight?: CSSProperties["height"];
  descColor?: CSSProperties["color"];
};

const Header: FunctionComponent<HeaderType> = ({
  chevLeftMed,
  title,
  desc,
  chevDownMed,
  pencil,
  chevDownMed1,
  crossMed,
  showBadge = true,
  showCrossButton = true,
  showSecondaryButton = true,
  showBackButton = true,
  showDropdown = true,
  showPrimaryButton = true,
  showUnderline = true,
  showChevLeftMedIcon,
  showDesc,
  headerPosition,
  headerHeight,
  descColor,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      position: headerPosition,
      height: headerHeight,
    };
  }, [headerPosition, headerHeight]);

  const descStyle: CSSProperties = useMemo(() => {
    return {
      color: descColor,
    };
  }, [descColor]);

  return (
    <div className={styles.header} style={headerStyle}>
      <div className={styles.content}>
        <div className={styles.left}>
          {showBackButton && (
            <div className={styles.backBtn}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Label</div>
              </div>
              {showChevLeftMedIcon && (
                <img
                  className={styles.chevLeftmedIcon}
                  alt=""
                  src={chevLeftMed}
                />
              )}
            </div>
          )}
          <div className={styles.headerTextParent}>
            <DescriptionYes
              label="Label"
              description="Description"
              showDesc
              descriptionYesPosition="unset"
              descColor="#5a707b"
            />
            {showBadge && (
              <div className={styles.floating}>
                <div className={styles.div}>3</div>
              </div>
            )}
          </div>
          {showDropdown && (
            <div className={styles.backBtn}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Label</div>
              </div>
              <img
                className={styles.chevLeftmedIcon}
                alt=""
                src={chevDownMed}
              />
            </div>
          )}
        </div>
        <div className={styles.right}>
          {showPrimaryButton && (
            <div className={styles.backBtn}>
              <div className={styles.labelContainer2}>
                <div className={styles.label2}>Label</div>
              </div>
              <img className={styles.chevLeftmedIcon} alt="" src={pencil} />
            </div>
          )}
          {showSecondaryButton && (
            <div className={styles.secondary}>
              <HeaderDropdownActive
                label="Label"
                chevDownMed="/chev-downmed1.svg"
                headerDropdownActivePosition="unset"
                headerDropdownActiveBorder="1px solid var(--neutrals-grey-900-100)"
                labelColor="#39474e"
              />
            </div>
          )}
          {showCrossButton && (
            <div className={styles.backBtn}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Label</div>
              </div>
              <img className={styles.chevLeftmedIcon} alt="" src={crossMed} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.divider}>
        {showUnderline && <div className={styles.thinDivider} />}
      </div>
    </div>
  );
};

export default Header;
