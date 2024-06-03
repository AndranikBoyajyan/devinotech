import AchievmentCard from "../../../components/AchievmentCard";
import styles from "./AchievmentsContainer.module.css";

const AchievmentsContainer = () => {
  return (
    <div className={styles.container}>
      <AchievmentCard title="Brand Idenity" />
      <AchievmentCard title="Technology" />
      <AchievmentCard title="UX/UI Design" />
    </div>
  );
};

export default AchievmentsContainer;
