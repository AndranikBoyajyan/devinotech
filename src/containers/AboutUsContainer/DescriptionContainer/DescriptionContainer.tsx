import Description from "../../../components/AboutUs/Description/Description";
import Skills from "../../../components/AboutUs/Skills";
import "./DescriptionContainer.css";

const DescriptionContainer = () => {
  return (
    <div className="descriptionContainer">
      <Description />
      <div className="dotes"></div>
      <Skills />
    </div>
  );
};

export default DescriptionContainer;
