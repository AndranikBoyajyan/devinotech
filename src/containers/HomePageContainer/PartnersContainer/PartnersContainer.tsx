import LogosContainer from "../LogosContainer";
import styles from "./PartnersContainer.module.css";

const PartnersContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.large}>
        We are partnering with forward-thinking companies since 2012
      </div>
      <div className={styles.small}>
        ~$250B — Valuation of the companies we’ve been privileged to work with,
        including Fortune 500 companies, technology SMEs, and funded startups
      </div>
      <LogosContainer />
    </div>
  );
};

export default PartnersContainer;
