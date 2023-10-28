const Hero = () => {
    return (
        <div className=" font-sohneKraftig max-w-7xl mx-auto md:flex gap-11 justify-between items-center pt-32 md:pt-28 pb -20 mt-auto px-5 md:px-0">
            <div className="pb-10 md:pb-0">
                <h1 className=" text-[2.5rem] md:text-[3.3rem] -tracking-[0.1rem] md:-tracking-[0.1rem] leading-[3.3rem] ">Scale your most creative outbound ideas</h1>
                <p className=" font-sohneBuch pt-6 pb-8 md:pb-10 text-base md:text-[19.2px] text-clay-blue-200 w-[85%] leading-8">Combine 50+ data providers, real-time scraping, and AI to send 1-1 personalized campaigns that book more meetings.</p>
                <a
                    className="sign-up-btn rounded-full items-center flex w-fit gap-1 pl-9 pr-8 py-4 bg-clay-black text-white cursor-pointer hover:bg-clay-purple-200"
                >
                    <div>Start 14 day Pro trial </div>
                    <div><img src={window.location.origin + "/images/up-arrow.svg"}/></div>
                </a>
                <div className="mt-10 w-[83%] text-xb text-clay-blue-200 flex gap-10 md:gap-0 flex-col md:flex-row justify-between">
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