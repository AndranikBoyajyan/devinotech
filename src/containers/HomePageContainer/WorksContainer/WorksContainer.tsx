import { useNavigate } from "react-router";
import styles from "./WorksContainer.module.css";

const WorksContainer = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/programs");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>We craft holistic, people- friendly digital experiences</h1>
        <h3>
          Devinnotech is a strategic partner for fast-growing tech companies in
          need of a scalable website with modular CMS, a design system, and
          future-proof brand identity.
        </h3>
        <div onClick={handleOnClick}>
          <button>{">"}</button>
          <div>LAST WORKS</div>
        </div>
      </div>
    </div>
  );
};

export default WorksContainer;
