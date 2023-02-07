import HeroSlider, { Slide, Nav } from 'hero-slider';
import slide1 from './SliderPics/slide1.jpg';
import slide2 from './SliderPics/slide2.jpg';
import slide3 from './SliderPics/slide3.jpg';
import slide4 from './SliderPics/slide4.jpg';
import slide5 from './SliderPics/slide5.jpg';
import slide6 from './SliderPics/slide6.jpg';
import slide7 from './SliderPics/slide7.jpg';
import { Link } from 'react-router-dom';

export const BasicSlider = () => {
  return (
    <HeroSlider
      height={'60vh'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 0,
        onSliding: nextSlide =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: nextSlide =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide),
      }}
    >
      <Link to="/fishtogether">
        <Slide
          background={{
            backgroundImageSrc: slide1,
          }}
        />
      </Link>

      <Link to="/fishtogether">
        <Slide
          background={{
            backgroundImageSrc: slide2,
          }}
        />
      </Link>

      <Link to="/seminar">
        <Slide
          background={{
            backgroundImageSrc: slide3,
          }}
        />
      </Link>

      <Link to="/mountains">
        <Slide
          background={{
            backgroundImageSrc: slide4,
          }}
        />
      </Link>

      <Link to="https://www.youtube.com/@strashnaya_ribalka/featured">
        <Slide
          background={{
            backgroundImageSrc: slide5,
          }}
        />
      </Link>

      <Link to="https://нхнч.com/Home/BaitOrder">
        <Slide
          background={{
            backgroundImageSrc: slide6,
          }}
        />
      </Link>

      <Link to="https://xn--m1aaxj.com/Home/Club">
        <Slide
          background={{
            backgroundImageSrc: slide7,
          }}
        />
      </Link>

      <Nav />
    </HeroSlider>
  );
};
