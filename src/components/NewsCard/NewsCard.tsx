import image_src from "../../../public/images/jpegs/ce12a29e01ad842f441c092e74d252f1.png";
import CopyIcon from "../../../public/images/CopyIcon";
import getTodayDate from "../../helpers/getTodayDate/getTodayDate";
import styles from "./NewsCard.module.css";

const NewsCard = () => {
  const formattedToday = getTodayDate();
  return (
    <div className={styles.container}>
      <img src={image_src} alt="gexankar" className={styles.image} />
      <div className={styles.eachCard}>
        <div className={styles.dateRow}>
          <div className={styles.date}>{formattedToday}</div>
          <CopyIcon />
        </div>
        <div className={styles.title}>
          Participatory Monitoring for Smart Communities in Armenia
        </div>
        <div className={styles.description}>
          There should be a small brief description of the program, when you
          click on it, it will lead to the full page
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
