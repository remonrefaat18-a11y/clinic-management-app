import "./AllCard.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiPulseFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
function AllCard({ name, info, status, conf, bgColor, SecIcon, color }) {
  return (
    <div className="contaier">
      <div className="left_info">
        <h2>{name}</h2>
        <p>
          <AiOutlineSchedule />
          {info}
        </p>
        <p>
          <RiPulseFill />
          {status}
        </p>
      </div>
      <div className="right_info">
        <p style={{ backgroundColor: bgColor, color: color }}>{conf}</p>
        <button>
          <SecIcon />
        </button>
        <button>
          <BiPhoneCall />
        </button>
      </div>
    </div>
  );
}
export default AllCard;
