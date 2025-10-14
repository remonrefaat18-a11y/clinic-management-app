import CriticalCard from "../CriticalCard/CriticalCard";
import "./CriticalCards.css";
import { BsExclamationTriangle } from "react-icons/bs";

const style = {
  backgroundColor: "#fef2f2",
  border: "0.1rem solid red",
};
const styleTwo = {
  backgroundColor: "#fefbe8",
  border: "0.1rem solid #ffdd88",
};
function CriticalCards() {
  return (
    <div className="container">
      <h2>
        <span>
          <BsExclamationTriangle />
        </span>
        Critical alerts ( 3 )
      </h2>
      <div className="cards_container">
        <CriticalCard
          style={style}
          message={"sdjdjsdjsjddjjjjdjjdjdjdjdjjdjdjdjdjdjdj"}
          time={"30m ago"}
          name={"yassa"}
        />
        <CriticalCard
          style={styleTwo}
          message={"sdjdjsdjsjddjjjjdjjdjdjdjdjjdjdjdjdjdjdj"}
          time={"30m ago"}
          name={"yassa"}
        />
        <CriticalCard
          style={styleTwo}
          message={"sdjdjsdjsjddjjjjdjjdjdjdjdjjdjdjdjdjdjdj"}
          time={"30m ago"}
          name={"yassa"}
        />
      </div>
    </div>
  );
}
export default CriticalCards;
