import Advantages from "../Advantages";
import "./MainStrategicDirections.css";

const MainStrategicDirections = () => {
  return (
    <div className="mainStrategicDirections">
      <h2 className="mainStrategicDirectionsTitle">Main Strategic Directions</h2>
      <div className="advantages">
        <Advantages text="Fairness" />
        <Advantages text="Transparency" />
        <Advantages text="Creativity" />
      </div>
    </div>
  );
};

export default MainStrategicDirections;
