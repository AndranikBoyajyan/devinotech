import LogosContainer from "../LogosContainer";

const PartnersContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "10vh",
        gap: "3vh",
      }}
    >
      <div style={{ fontSize: "x-large", width: "20%" }}>
        We are partnering with forward-thinking companies since 2012
      </div>
      <div style={{ fontSize: "small", color: "#667085", width: "25%" }}>
        ~$250B — Valuation of the companies we’ve been privileged to work with,
        including Fortune 500 companies, technology SMEs, and funded startups
      </div>
      <LogosContainer />
    </div>
  );
};

export default PartnersContainer;
