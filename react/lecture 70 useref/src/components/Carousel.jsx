import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';

function Carousel() {
     const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    });
  return (
    <div>
            <div className="embla" ref={emblaRef}>

                <div className="embla__container">

                    <div className="embla__slide">Slide 1</div>

                    <div className="embla__slide">Slide 2</div>

                    <div className="embla__slide">Slide 3</div>

                </div>

            </div>

            <button onClick={() => emblaApi?.scrollPrev()}>
                Previous
            </button>

            <button onClick={() => emblaApi?.scrollNext()}>
                Next
            </button>

    </div>
  )
}

export default Carousel