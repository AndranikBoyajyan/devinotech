import { FC } from "react";
import CupIcon from "../../../public/images/Achievments/CupIcon";
import DesignIcon from "../../../public/images/Achievments/DesignIcon";
import TechIcon from "../../../public/images/Achievments/TechIcon";

interface IProps {
  title: "Brand Idenity" | "Technology" | "UX/UI Design";
}

const AchievmentCard: FC<IProps> = ({ title }) => {
  const description =
    "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape. ";

  return (
    <div
      style={{
        borderRadius: "28px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        width: "20vw",
        justifyContent: "center",
        padding: "0px 15px",
        gap: "3vh",
      }}
    >
      {title === "Brand Idenity" ? (
        <CupIcon />
      ) : title === "Technology" ? (
        <TechIcon />
      ) : (
        <DesignIcon />
      )}
      <div>{title}</div>
      <div style={{ color: "#667085" }}>{description}</div>
    </div>
  );
};

export default AchievmentCard;
