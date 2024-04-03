import React, { useState } from "react";

const PhotoCarousel = ({ images }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <section>
            <div className="carousel w-full h-[40rem]">
                <div
                    key={activeSlide}
                    className={`carousel-item relative w-full flex items-center justify-center`}
                >
                    <img
                        src={images[activeSlide].src}
                        className="w-[25rem] h-auto"
                        alt={`Slide ${activeSlide + 1}`}
                    />

                    {images.length > 1 && ( // Conditionally render navigation buttons
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button
                                className="btn btn-primary btn-circle"
                                onClick={prevSlide}
                            >
                                ❮
                            </button>
                            <button
                                className="btn btn-primary btn-circle"
                                onClick={nextSlide}
                            >
                                ❯
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PhotoCarousel;
