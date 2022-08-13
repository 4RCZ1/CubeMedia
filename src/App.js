import css from './App.module.css';
import Slideshow from "./components/Slideshow";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Contact from "./components/Contact";


function App() {
  return (
    <div className={css.App}>
      <Header/>
      <main id='top'>
        <Slideshow/>
        <div id={'projekty'} className={css.sectionBar}>
          <h2>Marcin to ciołek</h2>
        </div>
        <div className={css.fullHeightSection}>
          <Slider/>
        </div>
        <div id={'oferta'} className={css.sectionBar}>
          <h2>Oferta</h2>
        </div>
        <div className={css.fullHeightSection}>

        </div>
        <div id={'zespol'} className={css.sectionBar}>
          <h2>Zespół</h2>
        </div>
        <div className={css.teamSection}>

        </div>
        <div id={'kontakt'} className={css.sectionBar}>
          <h2>Kontakt</h2>
        </div>
        <div className={css.fullHeightSection}>
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
