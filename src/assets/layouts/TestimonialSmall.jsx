import PropTypes from 'prop-types';
const TestimonialSmall = ({ img_path, content, name, heading, companyName }) => {
    return (
        <div className="bg-white p-8 md:p-7 rounded border border-b-[0.625rem] mb-16 md:mb-0 flex justify-between items-start">
            <div className=' w-[22rem] h-64'>
                <div className={` md:flex items-center justify-between`}>
                    <div className="items-center gap-x-4 md:flex">
                        <img src={window.location.origin + img_path} className="h-8 md:h-7" />
                        <p className={`pt-4 md:pt-0  text-sm font-sohneKraftig }`}>{heading}</p>
                    </div>
                </div>
                <p className="py-4 md:py-7">{content}</p>
                <div className="flex text-clay-blue-200 md:pb-7">
                    <span className="text-[0.9rem] md:text-base font-bold">{companyName} &nbsp;</span>
                    <span> {name}</span>
                </div>
            </div>
        </div>
    )
}

TestimonialSmall.propTypes = {
    img_path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired
};

export default TestimonialSmall;