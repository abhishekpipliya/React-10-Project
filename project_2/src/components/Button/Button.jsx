import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.primary_btn}>
      <MdMessage fontSize="24px" />
      Visa Support Chat
    </button>
  );
};

export default Button;
