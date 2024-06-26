import { FC } from "react";
import "./Advantages.css";
import SelectIconComponent from "../SelectIcon/SelectIcon";

interface IAdvantagesProps {
  text: string;
}

const Advantages: FC<IAdvantagesProps> = ({ text }) => {
  return (
    <div className="advantage">
      <SelectIconComponent /> <h3 className="advantageText"> {text} </h3>
    </div>
  );
};

export default Advantages;
