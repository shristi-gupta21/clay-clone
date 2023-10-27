export const FindJobs = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 md:px-0 py-10 md:py-20 relative">
            <img src={window.location.origin + "/images/round-red.png"} className="absolute bottom-36 md:block hidden -left-24 w-48 h-48 -rotate-45"/>
            <img src={window.location.origin + "/images/red-cube.png"} className="absolute top-[46%] -right-20 w-44 h-44 rotate-45 md:block hidden"/>
                 
            <div className="grid  grid-cols-1 md:grid-cols-6 gap-6 z-10 relative">
                <div className="md:col-span-2 h-[25rem] md:h-full text-white relative rounded-xl bg-clay-pink-500 p-10 md:p-16 text-center md:text-start overflow-hidden flex flex-col justify-center">
                    <img src={window.location.origin + "/images/round-red.png"} className="absolute -bottom-72 -left-40"/>
                    <img src={window.location.origin + "/images/red-cube.png"} className="absolute -top-56 -right-48"/>
                    <h2 className="font-bold text-[2rem] md:text-4xl tracking-tighter">Build & research lead lists with 50+ data providers </h2>
                    <p className="pt-4 text-base text-white/50">No more API keys or CSVs</p>
                </div>
                <div className="md:col-span-4 border group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-xl border flex justify-between bg-white gap-x-4 md:gap-x-0">
                        <span className="font-bold ">Find companies, people, and jobs <span className="text-clay-pink-500">on LinkedIn</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-pink-500 shrink-0  items-center flex justify-center">+</div>
                    </div>
                    <div className="p-16  bg-clay-pink-500/[0.15] border group-hover:border-none group-hover:bg-clay-pink-500  ease-in duration-300">
                        <img src={window.location.origin + "/images/buildleads.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base border flex justify-between bg-white gap-x-4 md:gap-x-0">
                        <span className="font-bold">Get accurate <span className="text-clay-pink-500">email & mobile data</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-pink-500 shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 bg-clay-pink-500/[0.15] border  group-hover:border-none group-hover:bg-clay-pink-500  ease-in duration-300">
                        <img src={window.location.origin + "/images/mobile-email-data.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 border group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 border text-base flex justify-between bg-white gap-x-4 md:gap-x-0">
                        <span className="font-bold">Research anything you can <span className="text-clay-pink-500">imagine</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-pink-500 shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 border  group-hover:border-none bg-clay-pink-500/[0.15] group-hover:bg-clay-pink-500  ease-in duration-300">
                        <img src={window.location.origin + "/images/imagine.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base border flex justify-between bg-white gap-x-4 md:gap-x-0">
                        <span className="font-bold">Summarize your research  <span className="text-clay-pink-500">with AI</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-clay-pink-500 shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 bg-clay-pink-500/[0.15] border group-hover:border-none group-hover:bg-clay-pink-500  ease-in duration-300">
                        <img src={window.location.origin + "/images/profile.png"} className="group-hover:scale-110" />
                    </div>
                </div>

            </div>
        </section>
    )
}


export default FindJobs 