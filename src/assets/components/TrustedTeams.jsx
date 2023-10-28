

export const TrustedTeams = () => {
    return (
        <section className="max-w-7xl mx-auto md:px-0 px-5 flex flex-col items-center md:items-start mt-1">
            <div className="flex gap-1">
                <h2 className="text-xb font-semibold">Trusted by 20,000+ leading teams</h2>
                <img src={window.location.origin + "/images/down-arrow.svg"} />
            </div>
            <div className="w-full flex md:flex-col flex-row gap-x-12 md:gap-x-12 justify-center md:justify-start mt-4 ">
                <div className=" flex flex-col md:flex-row justify-between">
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/intercom.svg"} className="h-5 md:h-7 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/verkada.svg"} className="h-3.5 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/doximity.svg"} className="h-4 md:h-5 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/pave.png"} className="h-8  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/mainstream.png"} className="h-3  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/ramp.svg"} className="h-5  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/courier.png"} className="h-3.5  object-contain" />
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row justify-between">
                    <div className="h-16 max-w-[12.375rem] flex items-center md:gap-x-16">
                        <img src={window.location.origin + "/images/predictable.svg"} className="h-6 md:h-7  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/workstream.svg"} className="h-5  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/firstround.png"} className="h-2.5 md:h-4  object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/thena.png"} className="h-7 md:h-9 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/jbsales.png"} className="h-6 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/flatfile.svg"} className="h-3.5 object-contain" />
                    </div>
                    <div className="h-16 max-w-[12.375rem] flex items-center ">
                        <img src={window.location.origin + "/images/quicknode.png"} className="h-4 md:h-5 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedTeams; 
