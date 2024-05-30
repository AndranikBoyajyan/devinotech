import Advantages from "../Advantages/Advantages";
import './CoreValues.css'

const CoreValues = () => {
  return (
    <div className="coreValuesWrap">
      <h2 className="coreValuesTitle">Core Values</h2>
      <span className="missionText"></span>
      <div className="advantages">
        <Advantages text="Fairness" />
        <Advantages text="Transparency" />
        <Advantages text="Creativity" />
        <Advantages text="Dedication" />
        <Advantages text="Responsibility" />
      </div>
    </div>
  );
};

export default CoreValues;
