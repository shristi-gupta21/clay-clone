
export const Testimonial = () => {
    return (
        <section className="max-w-6xl mx-auto px-5 md:px-0 rounded border border-b-[0.625rem]">
            <div className="bg-white p-7">
                <div className="items-center flex justify-between">
                    <div className="items-center gap-x-4 flex">
                        <img src={window.location.origin + "/images/recruit-qrew.jpeg"} className="h-7"/>
                        <p className="text-2xl font-semibold">Double your team’s efficiency</p>
                    </div>
                    <div className="flex gap-x-1 text-[#676d7e] font-semibold">
                        <button className="px-2">&lt;</button>
                        <button className="px-2">&gt;</button>
                    </div>
                </div>
                <p className="py-7">Using Clay, we have cut our sales team by 50% AND are landing more clients.</p>
                <div className="flex text-[#676d7e] pb-7">
                    <span className="font-bold">Recruit Qrew &nbsp;</span>
                    <span> Mehak Batra, Founder</span>
                </div>
            </div>
        </section>
    )
}

export default Testimonial 