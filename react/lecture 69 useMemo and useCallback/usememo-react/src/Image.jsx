
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function Image() {

    const [images, setImages] = useState([]);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    });

    useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setImages(data.results);
            })
            .catch((error) => {
                console.log("Error:", error);
            });

    }, []);

    return (
        <div className="p-5 relative">

            <h1 className="text-2xl font-bold mb-5">
                Rick and Morty Characters
            </h1>

            {/* Carousel Viewport */}
            <div ref={emblaRef} className="overflow-hidden ">

                {/* Slides Container */}
                <div className="flex ">

                    {images.map((ima) => (

                        <div
                            key={ima.id}
                            className="flex-[0_0_100%] min-w-0"
                        >
                            <img
                                src={ima.image}
                                alt={ima.name}
                                className="w-full h-80 object-cover rounded-xl"
                            />

                            <h2 className="text-xl font-bold mt-3">
                                {ima.name}
                            </h2>

                        </div>

                    ))}

                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-5 ">

                <button
                    type="button"
                    onClick={() => emblaApi?.scrollPrev()}
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg absolute"
                >
                    Previous
                </button>

                <button
                    type="button"
                    onClick={() => emblaApi?.scrollNext()}
                    className="bg-green-500 text-white px-5 py-2 rounded-lg"
                >
                    Next
                </button>

            </div>

        </div>
    );
}

export default Image;
