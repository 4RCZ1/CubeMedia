import css from "../styles/contact.modules.css";
import FacebookIcon from "../images/contact/FacebookIcon.js";
import InstagramIcon from "../images/contact/InstagramIcon.js";
import BehanceIcon from "../images/contact/BehanceIcon.js";
function Contact() {
  return <div className={css.iconText}>
  <FacebookIcon/><p>facebook.com/cubesmediainteractive</p>
  <InstagramIcon/><p>instagram.com/cube_media_interactive</p>
  <BehanceIcon/><p>behance.net/cube_interactive</p>
  </div>;
}

export default Contact;