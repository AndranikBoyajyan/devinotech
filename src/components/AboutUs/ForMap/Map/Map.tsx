import src from "../../../../../public/images/map/2560px-World_map_with_points.svg.png";
import './Map.css'

const Map = () => {
  return (
    <div className="map">
      <img className="mapImg" src={src} alt="" />
    </div>
  );
};

export default Map;
