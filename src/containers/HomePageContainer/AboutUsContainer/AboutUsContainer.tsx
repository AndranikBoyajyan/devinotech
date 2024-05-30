import { useNavigate } from "react-router";
import image_src from "../../../../public/images/jpegs/b48a85a235d71156b381ddf6fb746ed1.jpeg";

const AboutUsContainer = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/aboutus");
  };
  return (
    <div
      style={{
        background: "linear-gradient(#27AFD9, #011152)",
        display: "flex",
        flexDirection: "column",
        padding: "0px 0px 20px 80px",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70vw",
            justifyContent: "center",
          }}
        >
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image_src}
            style={{ width: "70%", height: "80%", borderRadius: "20px" }}
          />
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
        <button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "30px",
            alignSelf: "baseline",
            color: "#55D8F4",
            border: "none",
            cursor: "pointer",
          }}
        >
          {">"}
        </button>
        <div style={{ padding: "auto", alignItems: "center", color: "white" }}>
          ABOUT US
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
