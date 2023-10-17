
export const Testimonial = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 md:px-0 rounded ">
            <div className="bg-white p-8 md:p-7  border border-b-[0.625rem] mb-20 md:mb-0">
                <div className="items-center md:flex justify-between">
                    <div className="items-center gap-x-4 md:flex">
                        <img src={window.location.origin + "/images/recruit-qrew.jpeg"} className="h-8 md:h-7" />
                        <p className="text-xl md:text-2xl pt-4 md:pt-0 font-medium md:font-semibold">Double your team’s efficiency</p>
                    </div>
                    <div className="md:flex hidden gap-x-1  text-[#676d7e] font-semibold">
                        <button className="px-2">&lt;</button>
                        <button className="px-2">&gt;</button>
                    </div>
                </div>
                <p className="py-4 md:py-7">Using Clay, we have cut our sales team by 50% AND are landing more clients.</p>
                <div className="flex text-[#676d7e] md:pb-7">
                    <span className="text-[0.9rem] md:text-base font-bold">Recruit Qrew &nbsp;</span>
                    <span> Mehak Batra, Founder</span>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-center">
                <div className="flex justify-center text-lg gap-x-1 bg-[#e7e8ec] w-16 h-8 text-[#676d7e] font-semibold">
                    <button className="px-2 ">&lt;</button>
                    <button className="px-2">&gt;</button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial 