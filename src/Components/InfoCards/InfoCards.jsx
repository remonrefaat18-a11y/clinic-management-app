import InfoCard from "../InfoCard/InfoCard";
import "./InfoCards.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
function InfoCards() {
  return (
    <div className="info_cards_container">
      <InfoCard
        Icon={AiOutlineSchedule}
        about={"Today's appointments"}
        number={"8"}
        note={"4 coming "}
        iconColor={"#356ac8"}
      />
      <InfoCard
        Icon={BsPeople}
        about={"Active patients"}
        number={"3"}
        note={"Under follow-up"}
        iconColor={"#e63b5b"}
      />
      <InfoCard
        Icon={BsExclamationTriangle}
        about={"critical cases"}
        number={"3"}
        note={"Need immediate follow-up"}
        iconColor={"#e63b5b"}
      />
      <InfoCard
        Icon={FaRegClock}
        about={"working hours"}
        number={"8"}
        note={"today"}
        iconColor={"#356ac8"}
      />
    </div>
  );
}
export default InfoCards;
