import Coord from "./Coord";
import "./Map.css";
import VectorMap from "./VectorMap";

const Map = () => {
  return (
    <div className="map">
      <Coord />
      <VectorMap />
    </div>
  );
};

export default Map;
