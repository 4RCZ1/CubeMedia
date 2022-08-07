import css from '../styles/slider.module.css';
import FASHNACTV from "./SliderItems/FASHNACTV";
import MERCEDESEQB2022 from "./SliderItems/MERCEDESEQB2022";
import CARSANDCOFFEE2022 from "./SliderItems/CARSANDCOFFEE2022";
import JUWENALIASZCZECIN2022 from "./SliderItems/JUWENALIASZCZECIN2022";
import CandC from "../images/slider/CandC.png";
import Fashnactv from "../images/slider/FASHNACTV.png";
import Mercedeseqb2022 from "../images/slider/EQB.png";
import Juwenalia from "../images/slider/JUWENALIA.png";
import {Fragment, useState} from "react";
import Collapsible from "react-collapsible";

const Slider = () => {
  const [project, setProject] = useState(null);
  const SetProject = (index) => {
    setProject(project===index ? null : index);
  }

  const components = [FASHNACTV, MERCEDESEQB2022, CARSANDCOFFEE2022, JUWENALIASZCZECIN2022];
  const Component = project===null ? ()=>null : components[project];
  const images = [Fashnactv, Mercedeseqb2022, CandC, Juwenalia];


  return (
    <Fragment>
    <div className={css.sliderContainer}>
      <div className={css.leftBorder}>
        <div className="arrow-left icon"></div>
      </div>
      <div className={css.slider}>
        {images.map((image, index) => {
          return (<div className={css.sliderItem} key={index}>
              <img src={image} alt="slider item" onClick={() => SetProject(index)}/>
            </div>
          )
        })}
      </div>
      <div className={css.rightBorder}>
        <div className="arrow-right icon"></div>
      </div>
    </div>
      <Collapsible trigger={''} open={project!==null} lazyRender={true}>
        <Component/>
      </Collapsible>
    </Fragment>
  )
}

export default Slider;