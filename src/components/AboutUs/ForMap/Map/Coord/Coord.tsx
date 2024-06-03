import { useState } from "react";
import coord from "../../../../../../public/images/map/target.svg";
import "./Coord.css";
import Tooltip from "../Tooltip";

const Coord = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="coord">
      {isHover && <Tooltip />}
      <img
        className="coordImg"
        src={coord}
        alt=""
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
};

export default Coord;
