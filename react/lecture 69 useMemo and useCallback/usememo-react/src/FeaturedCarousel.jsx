
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';

function FeaturedCarousel() {

    // 1. Events store karne ke liye
    const [events, setEvents] = useState([]);

    // 2. Loading manage karne ke liye
    const [loading, setLoading] = useState(true);

    // 3. Error manage karne ke liye
    const [error, setError] = useState('');

    // 4. Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    });

    // 5. API call
    useEffect(() => {

        axios.get(
            'https://eventsphere-server-mfdb.onrender.com/api/events/featured'
        )
        .then((res) => {

            console.log(res.data);

            setEvents(res.data.data);

        })
        .catch((error) => {

            console.log(error);

            setError('Events load nahi ho paye.');

        })
        .finally(() => {

            setLoading(false);

        });

    }, []);

    // 6. Loading condition
    if (loading) {
        return (
            <h2 className="text-center mt-10">
                Loading...
            </h2>
        );
    }

    // 7. Error condition
    if (error) {
        return (
            <h2 className="text-center text-red-500 mt-10">
                {error}
            </h2>
        );
    }

    // 8. Empty data condition
    if (events.length === 0) {
        return (
            <h2 className="text-center mt-10">
                No events found.
            </h2>
        );
    }

    // 9. Main UI
    return (

        <div className="max-w-5xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6">
                Featured Events
            </h1>

            {/* Carousel Main Container */}
            <div className="relative">

                {/* Previous Button */}
                <button
                    type="button"
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                    bg-blue-600 text-white w-12 h-12 rounded-full
                    shadow-lg hover:bg-blue-700 transition"
                >
                    ❮
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                    bg-blue-600 text-white w-12 h-12 rounded-full
                    shadow-lg hover:bg-blue-700 transition"
                >
                    ❯
                </button>

                {/* Embla Viewport */}
                <div
                    className="overflow-hidden rounded-2xl"
                    ref={emblaRef}
                >

                    {/* Slides Container */}
                    <div className="flex">

                        {events.map((event) => (

                            <div
                                key={event._id}
                                className="flex-[0_0_100%] min-w-0 p-3"
                            >

                                {/* Event Card */}
                                <div className="bg-white rounded-2xl shadow-lg p-5">

                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-72 object-cover rounded-xl"
                                    />

                                    <h2 className="text-2xl font-bold mt-4">
                                        {event.title}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        {event.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default FeaturedCarousel;
