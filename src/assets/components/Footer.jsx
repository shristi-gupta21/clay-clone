
export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-5 md:px-0 my-20">
      <div className="md:flex-row flex flex-col gap-y-6 md:gap-y-2 justify-between">
        <div>
          <img
            className="h-10 w-[4.8rem]"
            src={window.location.origin + "/images/clay-nav-logo.png"}
            alt="Clay"
          />
        </div>
        <div>
          <p className=" font-semibold ">Product</p>
          <ul>
            <li className="py-2">Log in</li>
            <li>Learn</li>
            <li className="py-2">Integrations</li>
            <li>Pricing</li>
            <li className="py-2">Changelog</li>
          </ul>
        </div>
        <div>
          <p className="  font-semibold">Contact</p>
          <ul>
            <li className="py-2">Chat with us</li>
            <li >Get support on Stack</li>
           
          </ul>
        </div>
        <div>
          <p className="  font-semibold">Company</p>
          <ul>
            <li className="py-2">Meet Clay</li>
            <li>Wall of love</li>
            <li className="py-2">Careers</li>
            <li>Privacy Policy</li>
            <li className="py-2">Terms of service</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer