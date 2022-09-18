import css from "../../styles/foto.module.scss"
import foto1 from "../../images/offer/FotoContent1.jpg";
import foto2 from "../../images/offer/FotoContent2.png";
import foto3 from "../../images/offer/FotoContent3.png";

const FOTO = () => {
    return (
      <div>
      <div className={css.title}>
        <p>
          <b>CUBE MEDIA</b> OFERTA FOTO
        </p>
      </div>
      <div className={css.content}>
          <div className={css.fotoWrapper}>
            <img src={foto1} className={css.foto}/>
            <div className={css.description}> 
              <p className={css.descriptionHeader}>Sesje motoryzacyjne od 250zł</p>
              <p>kompleksowa sesja obejmująca:</p>
              <p>-kilka lokalizacji</p>
              <p>-min. 25 zdjęć w najwyższej możliwej jakości</p>
              <p>-szybką i profesjonalna obróbkę</p>
              <p>-zdjęcia poglądowe dla ewentualnych poprawek już na drugi dzień </p>
            </div>
          </div>
          <div className={css.fotoWrapper}>
            <img src={foto2} className={css.foto}/>
            <div className={css.description}> 
              <p className={css.descriptionHeader}>Realizacje eventowe od 500zł </p>
              <p>kompleksowa realizacja zawierająca:</p>
              <p>-pakiet od 100 gotowych zdjęć z wydarzenia</p>
              <p>-pierwsze zdjęcia gotowe do publikacji w 15 minut po koncercie</p>
              <p>-różnorodne ujęcia ukazujące cały event (artyści, publika, backstage itd.)</p>
            </div>
          </div>
          <div className={css.fotoWrapper}>
            <img src={foto3} className={css.foto}/>
            <div className={css.description}> 
              <p className={css.descriptionHeader}>Sesje produktowe studyjny/plenerowe od 100zł/produkt</p>
              <p>oferujemy:</p>
              <p>-dokładną postprodukcję </p>
              <p>-ujęcia dowolnego produktu na dowolnym tle </p>
              <p>-packshoty oraz sceny</p>
              <p>-od jednego do kilku ujęć jednego przedmiotu do wyboru</p>
            </div>
          </div>
      </div>
  </div>
    )
  }
  export default FOTO;