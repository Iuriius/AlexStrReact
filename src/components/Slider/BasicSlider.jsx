import HeroSlider, { Slide, Nav } from 'hero-slider';
import slide1 from './SliderPics/slide1.jpg';
import slide2 from './SliderPics/slide2.jpg';
import slide3 from './SliderPics/slide3.jpg';
import slide4 from './SliderPics/slide4.jpg';
import slide5 from './SliderPics/slide5.jpg';
import slide6 from './SliderPics/slide6.jpg';
import slide7 from './SliderPics/slide7.jpg';

export const BasicSlider = () => {
  return (
    <HeroSlider
      height={'60vh'}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
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
      <Slide
        background={{
          backgroundImageSrc: slide1,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide4,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide5,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide6,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slide7,
        }}
      />
      <Nav />
    </HeroSlider>
  );
};
