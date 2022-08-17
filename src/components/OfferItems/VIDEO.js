import css from "../../styles/video.module.css";
const VIDEO = () => {
    return (
        <div>
            <div className={css.title}>
                <p><b>CUBE MEDIA</b> OFERTA VIDEO</p>
            </div>
            <div className={css.mainText}>
            
                <p> Cube media oferuje szeroki zakres usług z zakresu realizacji oraz 
                    montażu filmów na wszelkie social media. </p>
                <span className={css.pricesText}>
                <p>  Film z eventu muzycznego do 10 min 1000zł </p>
                <p>  Nagranie koncertu do 60 min 1500zł </p>
                <p>  Spot reklamowy dla firmy do 7 min 2500zł </p>
                <p>  Teledysk muzyczny od 1500zł </p>
                <p>  Spot z wydarzenia od 1400zł za 15 min film </p>
                <p>  Wywiad na social media 750zł za 5min </p>
                </span>    
                
                    
                <p className={css.smallText}> *Uwaga podane ceny nie są cenami ostateczymi. Aby uzyskać konkretną
                    wycenę prosimy o kontak mailowy lub telefoniczny wszelkie niezbędne
                    dane podane są w zakładce kontakt </p>
        </div>
      </div>
    )
  }
  export default VIDEO;