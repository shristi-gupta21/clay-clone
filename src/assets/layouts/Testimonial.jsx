
import PropTypes from 'prop-types';
import { useState } from 'react';
const Testimonial = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
       console.log("next",currentSlide)
       
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
        console.log("right",currentSlide)
      };
    return (
        <div className="slider">
            <div className="slides-container" >
                {slides.map((slide,index) => (
                    <>
                        
                        <div key={index} className={`slide max-w-6xl mx-auto px-5 md:px-0 rounded `}>
                            <div className="bg-white p-8 md:p-7  border border-b-[0.625rem] mb-20 md:mb-0">
                                <div className="items-center md:flex justify-between">
                                    <div className="items-center gap-x-4 md:flex">
                                        <img src={window.location.origin + slide.img_path} className="h-8 md:h-7" />
                                        <p className="text-xl md:text-2xl pt-4 md:pt-0 font-medium md:font-semibold">{slide.heading}</p>
                                    </div>
                                    <div className="md:flex hidden gap-x-1  text-clay-blue-200 font-semibold">
                                        <button className="px-2" onClick={prevSlide}>&lt;</button>
                                        <button className="px-2" onClick={nextSlide}>&gt;</button>
                                    </div>
                                </div>
                                <p className="py-4 md:py-7">{slide.content}</p>
                                <div className="flex text-clay-blue-200 md:pb-7">
                                    <span className="text-[0.9rem] md:text-base font-bold">{slide.companyName} &nbsp;</span>
                                    <span> {slide.name}</span>
                                </div>
                            </div>
                            <div className="md:hidden flex items-center justify-center">
                                <div className="flex justify-center text-lg gap-x-1 bg-clay-blue-50 w-16 h-8 text-clay-blue-200 font-semibold">
                                    <button className="px-2 left-btn"  >&lt;</button>
                                    <button className="px-2 right-btn" >&gt;</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}


Testimonial.propTypes = {
    slides: PropTypes.array.isRequired
};

export default Testimonial 