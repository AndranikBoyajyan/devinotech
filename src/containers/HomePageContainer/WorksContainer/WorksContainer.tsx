const WorksContainer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(#27AFD9, #011152)",
        color: "white",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          marginLeft: "10vw",
        }}
      >
        <h1>We craft holistic, people- friendly digital experiences</h1>
        <h3>
          Devinnotech is a strategic partner for fast-growing tech companies in
          need of a scalable website with modular CMS, a design system, and
          future-proof brand identity.
        </h3>
        <div
          style={{
            display: "flex",
            margin: "30px 0px",
            alignItems: "center",
            gap: "5px",
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
            }}
          >
            {">"}
          </button>
          <div style={{ padding: "auto", alignItems: "center" }}>
            LAST WORKS
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksContainer;
