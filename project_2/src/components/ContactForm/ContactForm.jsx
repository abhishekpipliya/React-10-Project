import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="Via Support Chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="Via Call" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
