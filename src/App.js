import css from './App.module.css';
import Slideshow from "./components/Slideshow";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Offer from "./components/Offer";

function App() {
  return (
    <div className={css.App}>
      <Header/>
      <main id='top'>
        <Slideshow/>
        <div id={'projekty'} className={css.sectionBar}>
          <p>Projekty</p>
        </div>
        <div className={`${css.fullHeightSection} ${css.projectSectionWrapper}`}>
          <Slider/>
        </div>
        <div id={'oferta'} className={css.sectionBar}>
          <p>Oferta</p>
        </div>
        <div className={css.fullHeightSection}>
          <Offer/>
        </div>
        <div id={'zespol'} className={css.sectionBar}>
          <p>Zespół</p>
        </div>
        <div className={css.teamSection}>
          <Team/>
        </div>
        <div id={'kontakt'} className={css.sectionBar}>
          <p>Kontakt</p>
        </div>
        <div className={css.contactSection}>
          <Contact/>
        </div>
      </main>
      <footer>
        <p>POWERED BY CUBE MEDIA INTERACTIVE</p>
      </footer>
    </div>
  );
}

export default App;
