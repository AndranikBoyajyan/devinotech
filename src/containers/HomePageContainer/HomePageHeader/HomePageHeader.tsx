import { Button } from "@mui/material";
import DigAgency from "../../../../public/images/DigAgency/DigAgency";
import styles from "./HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainLeftContainer}>
        <div className={styles.mainLeft}>
          <div className={styles.blueLine}>
            <h1>Software Engineering</h1>
            <h1>Product</h1>
          </div>
          <h1 className={styles.lastLine}>
            Development Services, Design & Consulting
          </h1>
        </div>
        <Button
          variant="text"
          color="inherit"
          sx={{
            textTransform: "none",
            border: "1px solid black",
            borderRadius: "50px",
            padding: "8px 32px",
            width: "15vw",
          }}
        >
          More Info {">"}
        </Button>
      </div>
      <DigAgency />
    </div>
  );
};

export default HomePageHeader;
