import css from "../styles/offer.module.css";
import Foto from "../images/offer/Foto.png";
import Video from "../images/offer/Video.png";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import VIDEO from "./OfferItems/VIDEO.js";
import FOTO from "./OfferItems/FOTO.js";
import {useState} from "react";

   



const Offer = () => {

    const components = [VIDEO, FOTO];
    const [project, setProject] = useState(null);
    const SetProject = (index) => {
      setProject(project===index ? null : index);
    }
    const Component = project===null ? ()=>null : components[project];

    return( <div>
    <div className={css.contentWrapper}>    
        <p className={css.content}>
        Od 2020 roku specjalizujemy się w tworzeniu contentu na szeroko pojęte social media.
        W swojej ofercie posiadamy kompleksowe usługi z zakresu foto, wideo oraz marketingu.
        Jesteśmy młodym, elastycznym zespołem, który nie boi się wyzwań. Jesteśmy w stanie
        zrealizować kompleksowe zlecenia eventowe, motoryzacyjne, produktowe.
        </p>
    </div>
    <div className={css.imagesContainer}>  
        <div className={css.imageWrapper1}>
            <img className={css.photo1} src={Video} onClick={() => SetProject(0)}></img>
            <p className={css.imageText}>VIDEO</p>
        </div>
        <div className={css.imageWrapper2}>
            <img className={css.photo2} src={Foto} onClick={() => SetProject(1)}></img>
            <p className={css.imageText}>FOTO</p>
        </div>
    </div>
    <Accordion expanded={project!==null}>

        <AccordionDetails className={css.accordionWrapper}>
          <Component/>
        </AccordionDetails>
    </Accordion>
  </div>
    )
  }

  export default Offer;
