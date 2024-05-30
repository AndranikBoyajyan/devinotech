import image_src from "../../../public/images/jpegs/ce12a29e01ad842f441c092e74d252f1.png";
import CopyIcon from "../../../public/images/CopyIcon";

const NewsCard = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = "" + today.getMonth() + 1; // Months start at 0!
  let dd = "" + today.getDate();

  if (+dd < 10) dd = "0" + dd;
  if (+mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "413px",
        gap: "2vh",
        backgroundColor: "white",
      }}
    >
      <img
        src={image_src}
        alt="gexankar"
        width="413px"
        style={{ borderRadius: "20px 20px 0px 0px" }}
      />
      <div
        style={{
          width: "370px",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <div
          style={{
            width: "inherit",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "#F9FAFB",
              padding: "10px",
              borderRadius: "29px",
            }}
          >
            {formattedToday}
          </div>
          <CopyIcon />
        </div>
        <div style={{ fontSize: "larger" }}>
          Participatory Monitoring for Smart Communities in Armenia
        </div>
        <div style={{ fontSize: "small", color: "#667085" }}>
          There should be a small brief description of the program, when you
          click on it, it will lead to the full page
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
