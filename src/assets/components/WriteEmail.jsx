export const WriteEmail = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 md:px-0 my-20 relative">
            <img src={window.location.origin + "/images/spiral-2.png"} className="md:block hidden absolute bottom-40 -left-24 h-36 "/>
            <img src={window.location.origin + "/images/green-cylinder.png"} className="md:block hidden absolute top-10 -right-28 w-64 "/>
                 
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 z-10 relative">
                <div className="md:col-span-2 text-white relative rounded-xl text-center h-[25rem] md:h-full bg-clay-green p-10 md:p-16 overflow-hidden flex flex-col justify-center">
                    <img src={window.location.origin + "/images/green-cone.png"} className="absolute w-56 -bottom-28 md:-bottom-20 -right-20 md:-left-16 -rotate-45"/>
                    <img src={window.location.origin + "/images/green-spiral.png"} className="absolute w-56 -top-40 -left-16 md:-right-16 "/>
                    <h2 className="font-bold text-[2rem] ">Write personalized, high converting emails with AI.</h2>
                    <p className="pt-4 text-base text-white/50">Increase replies and book more </p>
                </div>
                <div className="md:col-span-4 border group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base border md:text-xl  flex justify-between gap-x-4 bg-white">
                        <span className="font-bold ">Write personalized messages to <span className="text-clay-green">every prospect</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-green shrink-0 items-center  flex justify-center">+</div>
                    </div>
                    <div className="p-16 bg-clay-green/20 border group-hover:border-none group-hover:bg-clay-green  ease-in duration-300">
                        <img src={window.location.origin + "/images/buildleads.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base border flex justify-between gap-x-4 bg-white">
                        <span className="font-bold">Reference profiles, websites, job listings, posts, <span className="text-clay-green">and more</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-green items-center flex shrink-0 justify-center">+</div>
                    </div>
                    <div className="p-11 bg-clay-green/20 border group-hover:border-none group-hover:bg-clay-green  ease-in duration-300">
                        <img src={window.location.origin + "/images/mobile-email-data.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 border group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 border text-base flex justify-between gap-x-4 bg-white">
                        <span className="font-bold">Train Clay’s AI with <span className="text-clay-green">high converting examples</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-green items-center flex  shrink-0 justify-center">+</div>
                    </div>
                    <div className="p-11 border group-hover:border-none bg-clay-green/20 group-hover:bg-clay-green  ease-in duration-300">
                        <img src={window.location.origin + "/images/imagine.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base  border flex justify-between gap-x-4 bg-white">
                        <span className="font-bold">Run the best campaigns for your <span className="text-clay-green">entire SDR team</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-green items-center flex shrink-0 justify-center">+</div>
                    </div>
                    <div className="p-11 bg-clay-green/20 border group-hover:border-none group-hover:bg-clay-green  ease-in duration-300">
                        <img src={window.location.origin + "/images/profile.png"} className="group-hover:scale-110" />
                    </div>
                </div>

            </div>
        </section>
    )
}


export default WriteEmail 