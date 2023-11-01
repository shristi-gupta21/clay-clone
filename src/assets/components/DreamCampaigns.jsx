const DreamCampaigns = () => {
    return (
        <section className=" max-w-6xl text-center mx-auto px-5 md:px-0 md:py-10 text-[2rem] md:text-5xl font-semibold">
            <p>Start molding your</p>
            <div className="flex justify-center">
                <span className="text-clay-blue-500">dr</span>
                <span className="text-clay-purple-500">ea</span>
                <span className="text-clay-pink-100">m c</span>
                <span className="text-clay-red-100">am</span>
                <span className="text-clay-orange">pa</span>
                <span className="text-clay-sand">ig</span>
                <span className="text-clay-yellow">ns</span>
            </div>
            <div className="flex items-center justify-center">
                <img src={window.location.origin + "/images/button.svg"} alt="" className="h-11" />
                <img src={window.location.origin + "/images/button.svg"} alt="" className="text-white h-11" />
            </div>
            <div className="relative flex flex-col items-center m y-20">
                <img src={window.location.origin + "/images/stones.png"} className="translate-y-[50%]" />
                <div className="bg-white p-6 z-10 relative">
                    <img src={window.location.origin + "/images/table.webp"} />
                </div>
            </div>
        </section>
    )
}

export default DreamCampaigns