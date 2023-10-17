/* eslint-disable react/prop-types */
import React from 'react';
 const Faq = (props) => {
    return (
        <div>
            <details
                className="newui-disclosure font-bold w-full pr-4 py-4 md:p-4 "
            >
                <summary
                    className="flex cursor-pointer list-none items-center"
                >
                    <div
                        className="flex w-full flex-col sm:flex-row  md:justify-between"
                    >
                        <span className="text-base lg:text-xl">
                            {props.heading}
                        </span>
                    </div>
                </summary>
                <p className="pt-4 text-base font-normal text-[#676d7e] lg:text-xl">
                    {props.content}
                </p>
            </details>

        </div>
    )
}

export default Faq;