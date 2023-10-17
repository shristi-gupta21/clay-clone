
export const DreamCampaigns = () => {
    return (
        <section className=" max-w-6xl text-center mx-auto px-5 md:px-0  text-[2rem] md:text-5xl font-semibold">
            <p>Start molding your</p>
            <div className="flex justify-center">
                <span className="text-[#3c82ec]">dr</span>
                <span className="text-[#825ddc]">ea</span>
                <span className="text-[#e45f82]">m c</span>
                <span className="text-[#e86558]">am</span>
                <span className="text-[#e3763a]">pa</span>
                <span className="text-[#edab44]">ig</span>
                <span className="text-[#e8b239]">ns</span>
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