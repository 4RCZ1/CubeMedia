import css from "../styles/header.module.css";

function Header() {
  return <header className={css.header}>
    <a href={"#projekty"}>PROJEKTY</a>
    <a href={"#oferta"}>OFERTA</a>
    <a href={'#top'} className={css.logo}>CUBE MEDIA</a>
    <a href={"#zespol"}>ZESPÓŁ</a>
    <a href={"#kontakt"}>KONTAKT</a>
  </header>;
}

export default Header;