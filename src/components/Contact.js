import css from "../styles/contact.modules.css";
import FacebookIcon from "../images/contact/FacebookIcon.js";
import InstagramIcon from "../images/contact/InstagramIcon.js";
import BehanceIcon from "../images/contact/BehanceIcon.js";
function Contact() {
  return <header className={css.header}>
  <FacebookIcon/>
  <InstagramIcon/>
  <BehanceIcon/>
  </header>;
}

export default Contact;