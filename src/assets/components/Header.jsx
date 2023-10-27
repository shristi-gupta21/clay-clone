const Header = () => {
    const headerStyle = {
        display:"flex"
    };
    if (window.matchMedia('(max-width: 767px)').matches) {
      headerStyle.display = 'none';
    }
    const headerjs = () => {
        const menu = document.querySelector("#primary-menu");
        const toggleMenuButton = document.querySelector("#mobile-menu-toggle");
        if (window.matchMedia("(max-width: 767px)").matches) {
            toggleMenuButton.addEventListener("click", () => {
                menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            });
        } 
    }

    return (
        <div>
            <header
                className=" font-sohneBuch fixed md:px-0 inset-x-4 xl:inset-x-0  border-b-1 top-0 block z-50 bg-clay-blue-100 border-b"
            >
                <nav
                    className="relative flex items-center justify-between h-20  py-2 md:py-0 divider border-b md:border-b-0 shadow-gd-purple  md:px-10"
                >
                    <a href="/" className="block">
                        <img
                            className="h-10 w-[4.8rem]"
                            src={window.location.origin + "/images/clay-nav-logo.png"}
                            alt="Clay"
                        />
                    </a>
                    <ul id="primary-menu" className="md:flex gap-8 text-sm " style={headerStyle}  >
                        <li>
                            <a href="/">Features</a>
                            <ul>
                                <li>
                                    <a href="/">Abroad Education Loan Overview</a>
                                </li>
                              
                                <li>
                                    <a href="/">Loan Referral Programme</a>
                                </li>
                                <li>
                                    <a href="/">Abroad Education Loan Tools</a>
                                    
                                </li>
                                <li>
                                    <a href="/">Loan for Upskilling Courses</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">Resources</a>
                            <ul>
                                <li>
                                    <a href="/">Learn Clay Tutorials</a>
                                </li>
                                <li>
                                    <a href="/">Templates</a>
                                    
                                </li>
                                <li>
                                    <a href="/">Blog</a>
                                </li>
                                <li>
                                    <a href="/">Integrations</a>
                                    
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Community</a>
                            <ul>
                                <li>
                                    <a href="/">Get Support on Slack</a>
                                </li>
                                <li>
                                    <a href="/">Wall of love</a>
                                   
                                </li>
                                <li>
                                    <a href="/">Hire an Expert</a>
                                </li>
                               
                            </ul>
                        </li>
                        <li>
                            <a href="/">Company</a>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li>
                                    <a href="/">Careers</a>
                                  
                                </li>
                               
                                
                            </ul>
                        </li>

                        <li><a href="/">Pricing</a>
                        </li>


                    </ul>
                    <div className="flex items-center md:hidden font-sohneKraftig">
                        <a
                            className="sign-up-btn rounded-full text-[0.9rem] flex gap-1 px-5 py-2.5 bg-clay-black text-white cursor-pointer hover:bg-clay-purple-200"
                        >
                            <div>Sign Up </div>
                            <div><img src={window.location.origin + "/images/up-arrow.svg"} /></div>
                        </a>
                        <button id="mobile-menu-toggle" className="ml-4" onClick={headerjs}>
                            <img src={window.location.origin+"/images/hamburger.svg"} />
                        </button>
                    </div>
                    <div className="md:flex font-sohneKraftig text-xs lg:text-[0.9375rem] hidden">
                        <a
                            className="px-3 py-1 lg:px-6 lg:py-2 hover:text-clay-purple-200 cursor-pointer"
                        >Log in</a
                        >
                        <a
                            className="sign-up-btn rounded-full  flex gap-1 px-5 py-2.5 bg-clay-black text-white cursor-pointer hover:bg-clay-purple-200"
                        >
                            <div>Sign Up </div>
                            <div><img src={window.location.origin + "/images/up-arrow.svg"} /></div>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
}


export default Header;

