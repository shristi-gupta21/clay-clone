import FindJobs from "./FindJobs";
import TrustedTeams from "./TrustedTeams";
import WriteEmail from "./WriteEmail";
import DreamCampaigns from "./DreamCampaigns";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import TestimonialSmall from "./TestimonialSmall";

const Body = () => {
    return (
        <>
            <TrustedTeams />
            <FindJobs />
            <Testimonials />
            <WriteEmail />
            <TestimonialSmall/>
            <Faqs/>
            <DreamCampaigns />
        </>
    )
}

export default Body;