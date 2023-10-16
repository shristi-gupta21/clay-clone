const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto md:flex gap-11 justify-between items-center pt-16 md:pt-44 pb-20 mt-auto px-5 md:px-0">
            <div className="pb-10 md:pb-0">
                <h1 className=" text-[2.5rem] md:text-[3.15rem] -tracking-[0.1rem] md:-tracking-[0.1rem] leading-[3rem] font-semibold">Scale your most creative outbound ideas</h1>
                <p className="pt-6 md:pt-8 pb-8 md:pb-10 text-base md:text-xl text-[#676d7e] w-[90%]">Combine 50+ data providers, real-time scraping, and AI to send 1-1 personalized campaigns that book more meetings.</p>
                <a
                    className="sign-up-btn rounded-full flex w-fit gap-2 px-9 py-4 bg-black text-white cursor-pointer hover:bg-[#9170e6]"
                >
                    <div>Start 14 day Pro trial </div>
                    <div><img src={window.location.origin + "/images/up-arrow.svg"}/></div>
                </a>
                <div className="mt-10 w-[95%] text-[#676d7e] flex gap-10 md:gap-0 flex-col md:flex-row justify-between">
                    <div className="flex items-center gap-2">
                        <img src={window.location.origin + "/images/user.svg"} />
                        <p>4k+ sales community</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={window.location.origin + "/images/like.svg"} />
                        <p>100+ testimonials</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={window.location.origin + "/images/rate.svg"} />
                        <p>5/5 rating</p>
                    </div>
                </div>
            </div>
            <img src={window.location.origin + "/images/hero-image.svg"} alt="" className="hidden md:block"/>
            <img src={window.location.origin + "/images/hero-mobile.png"} alt="" className=" md:hidden block"/>
        </div>
    )
}

export default Hero;