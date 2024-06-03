import { useNavigate } from "react-router";
import image_src from "../../../../public/images/jpegs/b48a85a235d71156b381ddf6fb746ed1.jpeg";
import styles from "./AboutUsContainer.module.css";

const AboutUsContainer = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/aboutus");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.text}>
          <h1>
            We translate research into solutions, crafting thoughtful and
            unified brands, apps, websites, interfaces, and systems.
          </h1>
          <h2>
            We partner with design leaders of tech brands and growing businesses
            to create simple, functional, and scalable digital solutions.
          </h2>
          <h2>
            Our global team of researchers, strategists, creatives, and
            engineers work with streamlined processes to break through
            organizational roadblocks and shape the brands of tomorrow.
          </h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={image_src} className={styles.image} />
        </div>
      </div>
      <div
        onClick={handleOnClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
        }}
      >
        <button className={styles.buttonStyle}>{">"}</button>
        <div className={styles.nav}>ABOUT US</div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
