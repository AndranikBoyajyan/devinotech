import { Button } from "@mui/material";
import DigAgency from "../../../../public/images/DigAgency/DigAgency";

const HomePageHeader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div style={{ display: "flex" }}>
            <h1
              style={{
                backgroundColor: "#4287f5",
                display: "flex",
                color: "white",
                height: "40px",
                margin: "16px 0px 0px 0px",
              }}
            >
              Software Engineering
            </h1>
            <h1 style={{ margin: "16px 0px 0px 0px" }}>Product</h1>
          </div>
          <h1 style={{ margin: "0px 0px 16px 0px" }}>
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
