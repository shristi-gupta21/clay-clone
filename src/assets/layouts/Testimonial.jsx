
import PropTypes from 'prop-types';
import { useState } from 'react';
const Testimonial = ({ slides,small }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
    console.log("small", small)
    return (
        <div className="slider">
            <div className="slides-container" >
                <div className={`slide max-w-6xl mx-auto px-5 md:px-0 ${small ? 'w-[22rem] h-64' : 'w-full md:h-56' } `}>
                    <div className="bg-white p-8 md:p-7 rounded border border-b-[0.625rem] mb-16 md:mb-0 flex justify-between items-start">
                        {slides.map((slide, index) => (
                            <>
                                <div className={`${currentSlide !== index ? 'hidden' : 'block'}`} key={index}>
                                    <div className={` md:flex items-center justify-between`}>
                                        <div className="items-center gap-x-4 md:flex">
                                            <img src={window.location.origin + slide.img_path} className="h-8 md:h-7" />
                                            <p className={`pt-4 md:pt-0  ${small ? 'text-sm font-sohneKraftig' : 'text-xl md:text-2xl font-medium md:font-semibold' }`}>{slide.heading}</p>
                                        </div>
                                    </div>
                                    <p className="py-4 md:py-7">{slide.content}</p>
                                    <div className="flex text-clay-blue-200 md:pb-7">
                                        <span className="text-[0.9rem] md:text-base font-bold">{slide.companyName} &nbsp;</span>
                                        <span> {slide.name}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                        <div className={` shrink-0 text-clay-blue-200 font-semibold ${small ? 'hidden' : 'md:flex hidden' }`}>
                            <button className="px-1" onClick={prevSlide}>
                                <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='rotate-90 w-6' />
                            </button>
                            <button className="px-1" onClick={nextSlide}>
                                <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='-rotate-90 w-6' />

                            </button>
                        </div>
                    </div>
                    <div className={` items-center justify-center ${small ? 'hidden' : 'md:hidden flex' }`}>
                        <div className="flex justify-center text-lg gap-x-1 bg-clay-blue-50 w-16 h-8 text-clay-blue-200 font-semibold">
                            <button className="px-1" onClick={prevSlide}>
                                <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='rotate-90 w-6' />
                            </button>
                            <button className="px-1" onClick={nextSlide}>
                                <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='-rotate-90 w-6' />

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


Testimonial.propTypes = {
    slides: PropTypes.array.isRequired,
    small: PropTypes.bool.isRequired,
};

export default Testimonial 