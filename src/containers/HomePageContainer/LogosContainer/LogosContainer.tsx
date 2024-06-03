import Logo1 from "../../../../public/images/Ipsums/Logo1";
import Logo2 from "../../../../public/images/Ipsums/Logo2";
import Logo3 from "../../../../public/images/Ipsums/Logo3";
import Logo4 from "../../../../public/images/Ipsums/Logo4";
import Logo5 from "../../../../public/images/Ipsums/Logo5";
import styles from "./LogosContainer.module.css";

const LogosContainer = () => {
  return (
    <div className={styles.container}>
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Logo1 />
    </div>
  );
};

export default LogosContainer;
