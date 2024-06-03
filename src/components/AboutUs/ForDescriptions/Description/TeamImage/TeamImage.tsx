import src from "../../../../../../public/images/jpegs/1376ebe845ff7216b946b6b3262ae5ca.jpeg";
import './TeamImage.css'

const TeamImage = () => {
  return (
    <div className="imageWrap">
      <img className="teamImage" src={src} alt="" />
    </div>
  );
};

export default TeamImage;
