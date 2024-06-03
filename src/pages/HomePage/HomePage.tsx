import groupPhoto from "../../../public/images/jpegs/1376ebe845ff7216b946b6b3262ae5ca.jpeg";
import WorksContainer from "../../containers/HomePageContainer/WorksContainer";
import AchievmentsContainer from "../../containers/HomePageContainer/AchievmentsContainer";
import AboutUsContainer from "../../containers/HomePageContainer/AboutUsContainer";
import HomePageHeader from "../../containers/HomePageContainer/HomePageHeader";
import NewsContainer from "../../containers/HomePageContainer/NewsContainer";
import PartnersContainer from "../../containers/HomePageContainer/PartnersContainer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HomePageHeader />
      <img src={groupPhoto}></img>
      <WorksContainer />
      <AchievmentsContainer />
      <AboutUsContainer />
      <NewsContainer />
      <PartnersContainer />
    </div>
  );
};

export default HomePage;
