import vectorMap from "../../../../../../public/images/map/_Vector map.svg";
import './VectorMap.css'

const VectorMap = () => {
  return (
    <div className="vectorMap">
      <img className="mapImg" src={vectorMap} alt="" />
    </div>
  );
};

export default VectorMap;
