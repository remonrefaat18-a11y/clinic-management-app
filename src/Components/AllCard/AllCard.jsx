import styles from "./AllCard.module.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiPulseFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
function AllCard({ name, info, status, phone }) {
  return (
    <div className={styles.allcard_contaier}>
      <div className={styles.left_info}>
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
      <div className={styles.right_info}>
        <a href={`tel:+20${phone}`}>
          <BiPhoneCall />
        </a>
      </div>
    </div>
  );
}
export default AllCard;
