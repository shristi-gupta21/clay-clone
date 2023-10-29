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
                    img_path: "/images/recruit-qrew.jpeg",
                    heading: "2. Double your team’s efficiency",
                    content: "Using Clay, we have cut our sales team by 50% AND are landing more clients.",
                    companyName: "Recruit Qrew",
                    name: "Mehak Batra, Founder"
                }
            ]} />
        </section>
    )
}

export default Testimonials