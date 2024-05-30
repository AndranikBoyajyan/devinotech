import AchievmentCard from "../../../components/AchievmentCard";

const AchievmentsContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "25px 0px",
        height: "40vh",
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      <AchievmentCard title="Brand Idenity" />
      <AchievmentCard title="Technology" />
      <AchievmentCard title="UX/UI Design" />
    </div>
  );
};

export default AchievmentsContainer;
