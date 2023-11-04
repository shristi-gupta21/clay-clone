import FindJobs from "./FindJobs";
import TrustedTeams from "./TrustedTeams";
import WriteEmail from "./WriteEmail";
import DreamCampaigns from "./DreamCampaigns";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import TestimonialSmalls from "./TestimonialSmalls";

const Body = () => {
    return (
        <>
            <TrustedTeams />
            <FindJobs />
            <Testimonials />
            <WriteEmail />
            <TestimonialSmalls/>
            <Faqs/>
            <DreamCampaigns />
        </>
    )
}

export default Body;