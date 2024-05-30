import groupPhoto from "../../../public/images/jpegs/1376ebe845ff7216b946b6b3262ae5ca.jpeg";
import WorksContainer from "../../containers/HomePageContainer/WorksContainer";
import AchievmentsContainer from "../../containers/HomePageContainer/AchievmentsContainer";
import AboutUsContainer from "../../containers/HomePageContainer/AboutUsContainer";
import HomePageHeader from "../../containers/HomePageContainer/HomePageHeader";
import NewsContainer from "../../containers/HomePageContainer/NewsContainer";
import PartnersContainer from "../../containers/HomePageContainer/PartnersContainer";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
      <HomePageHeader />
      <img
        style={{
          width: "35%",
          borderRadius: "20px",
          position: "absolute",
          top: "200px",
          left: `${window.innerWidth - 650}px`,
        }}
        src={groupPhoto}
      ></img>
      <WorksContainer />
      <AchievmentsContainer />
      <AboutUsContainer />
      <NewsContainer />
      <PartnersContainer />
    </div>
  );
};

export default HomePage;
