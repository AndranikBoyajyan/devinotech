import { Button } from "@mui/material";
import DigAgency from "../../../public/images/DigAgency/DigAgency";
import groupPhoto from "../../../public/images/jpegs/1376ebe845ff7216b946b6b3262ae5ca.jpeg";

const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: "#4287f5",
                display: "flex",
                color: "white",
              }}
            >
              Software Engineering
            </div>
            <div>Product Development Services, Design & Consulting</div>
          </h1>
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
        <img
          style={{
            width: "25%",
            borderRadius: "20px",
            position: "absolute",
            top: "250px",
            left: "1400px",
            zIndex: "-1",
          }}
          src={groupPhoto}
        ></img>
        <div style={{background: "linear-gradient(#e66465, #9198e5);"}}>
asdasd
        </div>
    </div>
  );
};

export default HomePage;
