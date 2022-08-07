import css from "../App.module.css";
import '../styles/slideshow.css';
import {useEffect} from "react";
import Slide1 from '../images/slideshow/Slide1.png';
import Slide2 from '../images/slideshow/Slide2.png';
import Slide3 from '../images/slideshow/Slide3.png';
import Slide4 from '../images/slideshow/Slide4.png';

function Slideshow() {

  const Slides = [Slide1, Slide2, Slide3, Slide4];

  const nextSlide = () => {
    const slides = document.getElementsByClassName('slide');
    const currentSlide = document.getElementsByClassName('active')[0];
    const currentIndex = currentSlide.id.replace('slide', '');
    const activeDot = document.getElementsByClassName('active-dot')[0];
    const nextDot = activeDot.nextElementSibling;
    const nextSlide = currentSlide.nextElementSibling;
    const slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    if (nextSlide) {
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');
      slideshowContainer.style.transform = `translateX(-${(Number(currentIndex)+1) * 100 / Slides.length}%)`;
      activeDot.classList.remove('active-dot');
      nextDot.classList.add('active-dot');
    }else{
      slides[0].classList.add('active');
      slideshowContainer.style.transform = 'translateX(0%)';
      activeDot.classList.remove('active-dot');
      document.getElementsByClassName('dot')[0].classList.add('active-dot');
    }
  }

  const setActiveSlide = (slide) => {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    const slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      dots[i].classList.remove('active-dot');
    }
    slides[slide].classList.add('active');
    dots[slide].classList.add('active-dot');
    slideshowContainer.style.transform = `translateX(-${(slide) * 100 / Slides.length}%)`;
  }

  useEffect(() => {
    const scrollOffset = document.getElementsByClassName('slideshow-container')[0].scrollWidth/Slides.length;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div className={css.slideshow}>
      <div className={'slideshow-container'}>
        {Slides.map((slide, index) => {
          const active = index === 0 ? 'active' : '';
          return (
            <div className={'slide '+active} id={'slide' + (index)} key={index}>
              <img src={slide} alt={'slajd ' + (index)}></img>
            </div>
          )
        })}
      </div>
      <div className="dot-container">
        {Slides.map((slide, index) => {
          const active = index === 0 ? 'active-dot' : '';
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <span className={'dot '+active} key={index} onClick={()=>setActiveSlide(index)}></span>
          )
        })}
      </div>
    </div>
  )
}

export default Slideshow;