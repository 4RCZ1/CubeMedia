import css from "../styles/contact.module.scss";
import FacebookIcon from "../images/contact/FacebookIcon.js";
import InstagramIcon from "../images/contact/InstagramIcon.js";
import BehanceIcon from "../images/contact/BehanceIcon.js";
import EmailIcon from "../images/contact/EmailIcon.js";
import PhoneIcon from "../images/contact/PhoneIcon.js";

function Contact() {
  return <div className={css.contacts}>
    <div className={css.textContainer}>
      <a href='https://facebook.com/cubesmediainteractive'>
        <div className={css.svgWrapper}>
          <FacebookIcon/>
        </div>
        <span className={css.textSpan}>facebook.com/cubesmediainteractive</span>
      </a>
    </div>
    <div className={css.textContainer}>
      <a href='https://instagram.com/cube_media_interactive'>
        <div className={css.svgWrapper}>
          <InstagramIcon/>
        </div>
        <span className={css.textSpan}>instagram.com/cube_media_interactive</span>
      </a>
    </div>
    <div className={css.textContainer}>
      <a href='https://behance.net/cube_interactive'>
        <div className={css.svgWrapper}>
          <BehanceIcon/>
        </div>
        <span className={css.textSpan}>behance.net/cube_interactive</span>
      </a>
    </div>
    <div className={css.textContainer}>
      <div className={css.svgWrapper}>
        <EmailIcon/>
      </div>
      <span className={css.textSpan}>cubesmediainteractive@gmail.com</span>
    </div>
    <div className={css.textContainer}>
      <div className={css.svgWrapper}>
        <PhoneIcon/>
      </div>
      <span className={css.textSpan}>503 929 632</span>
    </div>
  </div>;
}

export default Contact;