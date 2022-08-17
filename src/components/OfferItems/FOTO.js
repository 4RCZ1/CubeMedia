import css from "../../styles/foto.module.scss"
import foto from "../../images/offer/FotoContent1.jpg";
const FOTO = () => {
    return (
      <div>
      <div className={css.title}>
        <p>
          <b>CUBE MEDIA</b> OFERTA FOTO
        </p>
      </div>
      <div className={css.content}>
          <div className={css.fotoWrapper}><img src={foto} className={css.foto}></img></div>
          <div className={css.fotoWrapper}><img src={foto} className={css.foto}></img></div>
          <div className={css.fotoWrapper}><img src={foto} className={css.foto}></img></div>
      </div>
  </div>
    )
  }
  export default FOTO;