import "./InfoCard.css";

function InfoCard({ about, number, note, iconColor, Icon }) {
  return (
    <div className="alert_card">
      <div className="type_top">
        <h2>{about}</h2>
        <Icon style={{ color: iconColor }} />
      </div>
      <div className="info_card">
        <p className="num">{number}</p>
        <p>{note}</p>
      </div>
    </div>
  );
}

export default InfoCard;
