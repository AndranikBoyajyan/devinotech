import { Button } from "@mui/material";
import NewsCard from "../../../components/NewsCard";

const NewsContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        gap: '5vh'
      }}
    >
      <div style={{fontSize: '30px'}}>News</div>
      <div style={{display: 'flex',justifyContent: 'space-around' , gap: '5vw'}}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Button
          variant="text"
          color="inherit"
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
