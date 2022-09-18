import top from "../../images/projects/juwenalia/top.png";
import midLeft from "../../images/projects/juwenalia/midLeft.jpg";
import midCenterRight from "../../images/projects/juwenalia/midCenterRight.jpg";
import botLeft from "../../images/projects/juwenalia/botLeft.jpg";
import botCenter from "../../images/projects/juwenalia/botCenter.jpg";
import botRight from "../../images/projects/juwenalia/botRight.jpg";
import icons from "../../images/projects/juwenalia/icons.png";
import CubeMediaLogo from "../../images/projects/juwenalia/CubeMediaLogo.png";
import juwenaliaPlakat from "../../images/projects/juwenalia/juwenaliaPlakat.jpg";
import appCss from "../../App.module.css";
import css from '../../styles/project.module.scss';
import BehanceIcon from "../../images/contact/BehanceIcon";

const JUWENALIASZCZECIN2022 = () => {
  return (
    <div className={css.mainWrapper}>
      <div className={`${appCss.sectionBar} ${css.whiteHeader}`}><p><b>CUBE MEDIA</b> & JUWENALIA SZCZECIN 2022</p>
      </div>
      <div id={'photoSection'} className={css.photoSection}>
        <img src={top} className={css.top} alt={'Juwenalia Szczecin 2022'}/>
        <img src={midLeft} className={css.midLeft} alt={'Juwenalia Szczecin 2022'}/>
        <img src={midCenterRight} className={css.midCenterRight} alt={'Juwenalia Szczecin 2022'}/>
        <img src={botLeft} className={css.botLeft} alt={'Juwenalia Szczecin 2022'}/>
        <img src={botCenter} className={css.botCenter} alt={'Juwenalia Szczecin 2022'}/>
        <img src={botRight} className={css.botRight} alt={'Juwenalia Szczecin 2022'}/>
      </div>
      <div id={'iconsSection'} className={css.iconsSection}>
        <div id={'leftSphere'} className={`${css.sphere}`}>
          <img src={icons} alt={'Camera and sd card'}/>
        </div>
        <div id={'leftBar'} className={`${css.bar} ${css.left}`}>
          <b>
            256545 zdjęć
          </b>
          <b>
            700GB plików
          </b>
        </div>
        <div id={'middleSphere'} className={`${css.sphere} ${css.bigSphere}`}>
          <img src={CubeMediaLogo} alt={'Cube Media Logo'}/>
        </div>
        <div id={'rightBar'} className={`${css.bar} ${css.right}`}>
          <a href='https://behance.net/cube_interactive'>
            <b>
              Zobacz więcej
            </b>
          </a>
        </div>
        <div id={'rightSphere'} className={`${css.sphere}`}>
          <a href='https://behance.net/cube_interactive'>
            <BehanceIcon/>
          </a>
        </div>
      </div>
      <div id={'descriptionSection'}>
        <h1>
          Trzy aparaty i 25tys zdjęć później czyli jak zrealizowaliśmy event Juwenalia 2022 w Szczecinie, Dwa dni
          koncertów 10 topowych artystów. Aby spełnić wymogi organizatora oraz zapotrzebowanie fanów nasze zdjęcia na
          bieżąco przechodziły proces selekcji i obróbki. Dzięki temu materiał był gotowy do publikacji na social
          mediach organizatora w mniej niż 2h od zakończenia koncertu.
        </h1>
      </div>
      <img className={css.poster} src={juwenaliaPlakat} alt={'Juwenalia Szczecin 2022'}/>
      <div className={css.footerSection}>
        <h3>PROJEKT ZREALIZOWANY PRZEZ:</h3>
        <div className={css.authors}>
          <h3>Kacper Mikuła</h3>
          <h3>Maciej Kowalonek</h3>
          <h3>Lesław Kopecki</h3>
        </div>
      </div>
    </div>
  )
}
export default JUWENALIASZCZECIN2022;