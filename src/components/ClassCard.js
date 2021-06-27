import Blink from "react-blink-text";

const ClassCard = ({
  color,
  className,
  teacher,
  period,
  time,
  img,
  inSession = false,
}) => {
  return (
    <div
      style={{
        color: "white",
        padding: "10px",
        backgroundColor: color,
        width: "290px",
        height: "250x",
        borderRadius: "20px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: 24 }}>{className}</div>
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: 18, marginTop: "6px" }}>
          <p style={{ fontSize: 20, fontWeight: "600" }}>{teacher}</p>
          {/* <br /> */}
          {period} period
          <br />
          {time}
          <div style={{ marginTop: "5px" }}>
            {inSession ? (
              <Blink
                color="red"
                text="Class in session"
                fontSize="21"
                fontWeight="bold"
                blinkTime={2}
              />
            ) : null}
          </div>
        </div>
        <img
          src={img + ".jpeg"}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "75px",
            marginLeft: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default ClassCard;
