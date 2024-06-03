import { Button } from "@mui/material";
import NewsCard from "../../../components/NewsCard";
import { useNavigate } from "react-router";
import styles from "./NewsContainer.module.css";

const NewsContainer = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/news");
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>News</div>
      <div className={styles.main}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Button
        variant="text"
        color="inherit"
        onClick={handleOnClick}
        sx={{
          textTransform: "none",
          border: "1px solid black",
          borderRadius: "50px",
          padding: "8px 32px",
          width: "8vw",
        }}
      >
        All news {">"}
      </Button>
    </div>
  );
};

export default NewsContainer;
