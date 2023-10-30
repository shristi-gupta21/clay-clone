import Testimonial from '../layouts/Testimonial'

const Testimonials = () => {
    return (
        <section className="testimonials">

            <Testimonial slides={[
                {
                    img_path: "/images/recruit-qrew.jpeg",
                    heading: "Double your team’s efficiency",
                    content: "Using Clay, we have cut our sales team by 50% AND are landing more clients.",
                    companyName: "Recruit Qrew",
                    name: "Mehak Batra, Founder"
                },
                {
                    img_path: "/images/servicebell.jpeg",
                    heading: "Find dream clients at scale",
                    content: "Clay enables insanely targeted prospecting at scale. Skilled users can build their dream list with a fraction of the time and money historically required.",
                    companyName: "ServiceBell",
                    name: "Jacob Tuwiner, Growth"
                },
                {
                    img_path: "/images/recruit-qrew.jpeg",
                    heading: "3. Double your team’s efficiency",
                    content: "Using Clay, we have cut our sales team by 50% AND are landing more clients.",
                    companyName: "Recruit Qrew",
                    name: "Mehak Batra, Founder"
                },
                {
                    img_path: "/images/recruit-qrew.jpeg",
                    heading: "4. Double your team’s efficiency",
                    content: "Using Clay, we have cut our sales team by 50% AND are landing more clients.",
                    companyName: "Recruit Qrew",
                    name: "Mehak Batra, Founder"
                },
            ]} />
        </section>
    )
}

export default Testimonials