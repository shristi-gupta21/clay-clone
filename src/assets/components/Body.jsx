import FindJobs from "./FindJobs";
import TrustedTeams from "./TrustedTeams";
import WriteEmail from "./WriteEmail";
import DreamCampaigns from "./DreamCampaigns";
import Faq from "../layouts/Faq";
import Testimonials from "./Testimonials";

const Body = () => {
    return (
        <>
            <TrustedTeams />
            <FindJobs />
           <Testimonials/>
            <WriteEmail />
            <section className=" max-w-2xl mx-auto my-20 px-5 md:px-0">
                <h1 className="md:flex pb-10 md:pb-20 justify-center text-4xl md:text-5xl font-semibold">FAQ</h1>
                <Faq heading={"How can Clay offer so many enrichments for a low cost?"} content={"We offer a simple monthly subscription at a fraction of the cost of most single data providers. This is because we buy our credits in bulk, so you can get them for much cheaper without signing onto large, unnecessary commitments. You can pick and choose the best from 50+ data providers for your prospecting flow :)"} />
                <hr className="my-5"/>
                <Faq heading={"How does Clay work?"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo temporibus suscipit harum impedit? Voluptas impedit repellat officiis deleniti porro deserunt quibusdam cum eius voluptate. Ducimus recusandae corporis deserunt ratione distinctio praesentium, voluptates necessitatibus consectetur? Corrupti iste cumque commodi doloremque temporibus tempore aliquam nam voluptas repellat numquam. Quas aliquam sequi libero?"} />
                <hr className="my-5"/>
                <Faq heading={"What is the benefit of using multiple data providers?"} content={"We provide access to multiple data providers to allow you to build enrichments on top of each other. This allows you to “waterfall” providers to find the most accurate data for the lowest cost. At the same time, it allows you to pull different types of data from different providers. As an example you can use LinkedIn to find their profile details, then use this information to find their work email with Datagma. Clay is providing a new creative way to find the best information on your leads at the cheapest cost."} />
                <hr className="my-5"/>
                <Faq heading={"How does AI & GPT-4 work in Clay?"} content={"Your AI messaging is only as powerful as the data that powers it. Clay leverages GPT-4 to help you automate research on leads and write 1:1 personalized campaigns. You can even train the AI model to write like you."} />
                <hr className="my-5"/>
            </section>
            
            <DreamCampaigns />
        </>
    )
}

export default Body;