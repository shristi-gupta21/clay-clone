export const Faq = () => {
    return (
        <div>
            <details
                className="newui-disclosure [&>summary::before]:bg-center [&>summary::before]:bg-no-repeat [&>summary::before]:bg-contain [&[open]>summary]:font-semibold w-full rounded border border-gray-200 p-4 shadow-sm shadow-slate-300"
            >
                <summary
                    className="flex cursor-pointer list-none items-center gap-3 before:inline-block before:h-6 before:w-6 before:shrink-0 before:content-[''] lg:before:h-[1.625rem] lg:before:w-[1.625rem]"
                >
                    <div
                        className="flex w-full flex-col sm:flex-row md:font-semibold md:justify-between"
                    >
                        <span className="text-sm lg:text-xl">
                            
                        </span>
                    </div>
                </summary>
                <p className="pt-4 text-xs text-gd-gray-400 lg:text-base">

                </p>
            </details>

        </div>
    )
}

export default Faq;