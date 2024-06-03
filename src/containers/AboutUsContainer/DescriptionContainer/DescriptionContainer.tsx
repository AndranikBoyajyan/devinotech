import Description from "../../../components/AboutUs/ForDescriptions/Description/Description";
import Skills from "../../../components/AboutUs/ForDescriptions/Skills";
import "./DescriptionContainer.css";

const DescriptionContainer = () => {
  return (
    <div className="descriptionContainer">
      <Description />
      <Skills />
    </div>
  );
};

export default DescriptionContainer;
