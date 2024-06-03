import { FC } from "react";
import CupIcon from "../../../public/images/Achievments/CupIcon";
import DesignIcon from "../../../public/images/Achievments/DesignIcon";
import TechIcon from "../../../public/images/Achievments/TechIcon";
import styles from './AchievmentCard.module.css'

interface IProps {
  title: "Brand Idenity" | "Technology" | "UX/UI Design";
}

const AchievmentCard: FC<IProps> = ({ title }) => {
  const description =
    "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape. ";

  return (
    <div
      className={styles.container}
    >
      {title === "Brand Idenity" ? (
        <CupIcon />
      ) : title === "Technology" ? (
        <TechIcon />
      ) : (
        <DesignIcon />
      )}
      <div>{title}</div>
      <div className={styles.divColor}>{description}</div>
    </div>
  );
};

export default AchievmentCard;
