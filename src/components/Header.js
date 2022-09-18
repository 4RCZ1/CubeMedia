import css from "../styles/header.module.css";

function Header() {
  return <header className={css.header}>
    <div className={css.sideWrapper}>
      <a href={"#projekty"}>PROJEKTY</a>
      <a href={"#oferta"}>OFERTA</a>
    </div>
    <a href={'#top'} className={css.logo}>CUBE MEDIA</a>
    <div className={css.sideWrapper}>
      <a href={"#zespol"}>ZESPÓŁ</a>
      <a href={"#kontakt"}>KONTAKT</a>
    </div>
  </header>;
}

export default Header;