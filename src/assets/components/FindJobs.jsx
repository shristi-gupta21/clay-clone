export const FindJobs = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 md:px-0 py-20 relative">
            <img src={window.location.origin + "/images/round-red.png"} className="absolute bottom-36 md:block hidden -left-24 w-48 h-48 -rotate-45"/>
            <img src={window.location.origin + "/images/red-cube.png"} className="absolute top-[46%] -right-20 w-44 h-44 rotate-45 md:block hidden"/>
                 
            <div className="grid  grid-cols-1 md:grid-cols-6 gap-6 z-10 relative">
                <div className="md:col-span-2 text-white relative rounded-xl bg-[#cc3c58] p-16 overflow-hidden flex flex-col justify-center">
                    <img src={window.location.origin + "/images/round-red.png"} className="absolute -bottom-72 -left-40"/>
                    <img src={window.location.origin + "/images/red-cube.png"} className="absolute -top-56 -right-48"/>
                    <h2 className="font-bold text-[2rem] md:text-4xl tracking-tighter">Build & research lead lists with 50+ data providers </h2>
                    <p className="pt-4 text-base text-white/50">No more API keys or CSVs</p>
                </div>
                <div className="md:col-span-4 border-2 group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-xl  flex justify-between bg-white">
                        <span className="font-bold ">Find companies, people, and jobs <span className="text-[#cc3c58]">on LinkedIn</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-[#cc3c58] shrink-0  items-center flex justify-center">+</div>
                    </div>
                    <div className="p-16 bg-[#cc3c581f] border group-hover:bg-[#cc3c58]  ease-in duration-300">
                        <img src={window.location.origin + "/images/buildleads.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border-2 cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base flex justify-between bg-white">
                        <span className="font-bold">Get accurate <span className="text-[#cc3c58]">email & mobile data</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-[#cc3c58] shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 bg-[#cc3c581f] border group-hover:bg-[#cc3c58]  ease-in duration-300">
                        <img src={window.location.origin + "/images/mobile-email-data.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 border-2 group cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base flex justify-between bg-white">
                        <span className="font-bold">Research anything you can <span className="text-[#cc3c58]">imagine</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-[#cc3c58] shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 border bg-[#cc3c581f] group-hover:bg-[#cc3c58]  ease-in duration-300">
                        <img src={window.location.origin + "/images/imagine.png"} className="group-hover:scale-110" />
                    </div>
                </div>
                <div className="md:col-span-2 group border-2 cursor-pointer bg-white rounded-xl overflow-hidden">
                    <div className="p-4 md:p-6 text-base  flex justify-between bg-white">
                        <span className="font-bold">Summarize your research  <span className="text-[#cc3c58]">with AI</span></span>
                        <div className="text-3xl text-white h-7 w-7 rounded-full bg-[#cc3c58] shrink-0 items-center flex justify-center">+</div>
                    </div>
                    <div className="p-11 bg-[#cc3c581f] border group-hover:bg-[#cc3c58]  ease-in duration-300">
                        <img src={window.location.origin + "/images/profile.png"} className="group-hover:scale-110" />
                    </div>
                </div>

            </div>
        </section>
    )
}


export default FindJobs 