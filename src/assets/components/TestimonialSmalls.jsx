import TestimonialSmall from '../layouts/TestimonialSmall'
import { useState } from 'react';
const TestimonialSmalls = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = document.querySelectorAll(".slide-container > div");
    console.log(currentSlide)
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide >= totalSlides.length -1 ? 0 : prevSlide + 1));
        if(currentSlide > totalSlides.length - 1){
            setCurrentSlide(0)
            totalSlides[currentSlide].style.display = "none"
        }else{
            totalSlides[currentSlide].style.display = "block"
        }
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides.length - 1 : prevSlide - 1));
        if(currentSlide === 0){
            setCurrentSlide( totalSlides.length - 1)
            totalSlides[currentSlide].style.display = "none"
        }else{
            totalSlides[currentSlide].style.display = "block"
        }
    };
    return (
        <section className="testimonials max-w-6xl mx-auto px-5 md:px-0">
            <div className='flex justify-between'>
                <div className='flex gap-x-2'>
                    <img src={window.location.origin + '/images/thumbs-up.svg'} />
                    <h2 className=' font-sohneKraftig text-2xl'>Why leading outbound teams love Clay</h2>
                </div>
                <div className={` shrink-0 text-clay-blue-200 font-semibold md:flex hidden`}>
                    <button className="px-1" onClick={prevSlide}>
                        <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='rotate-90 w-6' />
                    </button>
                    <button className="px-1" onClick={nextSlide}>
                        <img src={window.location.origin + "/images/faq-arrow-down.svg"} alt="" className='-rotate-90 w-6' />

                    </button>
                </div>
            </div>
            <div className="flex gap-4 items-center pt-10 slide-container overflow-hidden">
                
                <TestimonialSmall img_path={"/images/recruit-qrew.jpeg"}
                    heading={"1Double your team’s efficiency"}
                    content={"Using Clay, we have cut our sales team by 50% AND are landing more clients."}
                    companyName={"Recruit Qrew"}
                    name={"Mehak Batra, Founder"} />
                <TestimonialSmall img_path={"/images/recruit-qrew.jpeg"}
                    heading={"2Double your team’s efficiency"}
                    content={"Using Clay, we have cut our sales team by 50% AND are landing more clients."}
                    companyName={"Recruit Qrew"}
                    name={"Mehak Batra, Founder"} />
                <TestimonialSmall img_path={"/images/recruit-qrew.jpeg"}
                    heading={"3Double your team’s efficiency"}
                    content={"Using Clay, we have cut our sales team by 50% AND are landing more clients."}
                    companyName={"Recruit Qrew"}
                    name={"Mehak Batra, Founder"} />
                <TestimonialSmall img_path={"/images/recruit-qrew.jpeg"}
                    heading={"4Double your team’s efficiency"}
                    content={"Using Clay, we have cut our sales team by 50% AND are landing more clients."}
                    companyName={"Recruit Qrew"}
                    name={"Mehak Batra, Founder"} />
            </div>

        </section>
    )
}

export default TestimonialSmalls;