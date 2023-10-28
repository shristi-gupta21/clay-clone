/* eslint-disable react/prop-types */
import { useState } from "react";
import imageClosed from '/images/faq-arrow-down.svg'; 
 const Faq = (props) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <div>
            <details 
                className="newui-disclosure font-bold w-full pr-4 py-4 md:p-4 "
            >
                <summary
                    className="flex cursor-pointer list-none items-center" onClick={()=>setIsDetailsOpen(!isDetailsOpen)}
                >
                    <div
                        className="flex w-full flex-col sm:flex-row  md:justify-between"
                    >
                        <span className="text-base lg:text-xl">
                            {props.heading}
                        </span>
                    </div>
                    <div className={`w-10 h-10 mr-2 ${!isDetailsOpen ? 'rotate-0' : 'rotate-180'}`} style={{backgroundImage: `url(${imageClosed})`, backgroundSize: "cover"}}></div>

                </summary>
                <p className="pt-4 text-base font-normal text-clay-blue-200 lg:text-xl">
                    {props.content}
                </p>
            </details>

        </div>
    )
}

export default Faq;