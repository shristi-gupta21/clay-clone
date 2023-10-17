import { useEffect } from "react";

const Header = () => {

    const headerjs = () => {
        const menu = document.querySelector("#primary-menu");
        const toggleMenuButton = document.querySelector("#mobile-menu-toggle");
        if (window.matchMedia("(max-width: 767px)").matches) {
            toggleMenuButton.addEventListener("click", () => {
                if (menu.style.display === "none") {
                    menu.style.display = "";
                } else {
                    menu.style.display = "none";
                }
            });

            const buttonClassName = "pl-2 pr-4 grow flex justify-end items-center";
            const buttonClassList = buttonClassName.split(" ");
            const caretClassName =
                "inline-block w-2.5 h-2.5 border-t-[3px] border-r-[3px] rounded-sm";
            const caretClassList = caretClassName.split(" ");
            const buttonInactiveClassList = ["rotate-[135deg]", "border-black"];
            const buttonActiveClassList = ["-rotate-45", "border-gd-purple-500"];
            const buttonAndLabelContainerClassName = "flex justify-between pb-2";


            const allUls = menu.querySelectorAll("li>ul");

            allUls.forEach((ul) => {
                const buttonAndLabelContainer = document.createElement("div");
                buttonAndLabelContainer.className = buttonAndLabelContainerClassName;

                const btn = document.createElement("button");
                btn.classList.add(...buttonClassList);
                const caret = document.createElement("div");
                // console.log("caret classes:", caretClassList, buttonInactiveClassList);
                caret.classList.add(...caretClassList, ...buttonInactiveClassList);

                btn.append(caret);

                const menuItem = ul.parentElement.firstElementChild;

                buttonAndLabelContainer.append(ul.parentElement.firstElementChild);
                buttonAndLabelContainer.append(btn);


                ul.parentElement.prepend(buttonAndLabelContainer);

                btn.addEventListener("click", () => {

                    if (ul.style.display === "block") {
                        ul.style.display = "";
                        caret.classList.remove(...buttonActiveClassList);
                        caret.classList.add(...buttonInactiveClassList);
                        menuItem.classList.remove("text-gd-purple-500", "font-bold");
                    } else {
                        caret.classList.add(...buttonActiveClassList);
                        caret.classList.remove(...buttonInactiveClassList);
                        ul.style.display = "block";
                        menuItem.classList.add("text-gd-purple-500", "font-bold");
                    }
                });
            });
        } else {
            menu.style.display = ""
        }
    }

    useEffect(() => { headerjs() }, [])
    return (
        <div>
            <header
                className="fixed md:px-0 inset-x-4 xl:inset-x-0  border-b-1 top-0 block z-50 bg-[#f4f7fd]"
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
                    <ul id="primary-menu" className="flex gap-12 text-sm" style={{ display: "none", backgroundColor: "#f4f7fd" }}>
                        <li>
                            <a href="/">Features</a>
                            <ul>
                                <li>
                                    <a href="/study-abroad-education-loans">Abroad Education Loan Overview</a>
                                </li>
                                <li>
                                    <a href="/">Our Lending Partners?</a>
                                    <ul>
                                        <li><a href="/sbi-education-loan">SBI</a></li>
                                        <li><a href="/bob-education-loan">BOB</a></li>
                                        <li><a href="/axis-education-loan">Axis</a></li>
                                        <li><a href="/icici-education-loan">ICICI</a></li>
                                        <li><a href="/incred-education-loan">Incred</a></li>
                                        <li><a href="/avanse-education-loan">Avanse</a></li>
                                        <li><a href="/auxilo-education-loan">Auxilo</a></li>
                                        <li><a href="/idfc-education-loan">IDFC</a></li>
                                        <li><a href="/ubi-education-loan">UBI</a></li>
                                        <li><a href="/prodigy-finance-education-loan">Prodigy</a></li>
                                        <li><a href="/mpower-financing-education-loan">MPower</a></li>
                                        <li><a href="/hdfc-credila-education-loan">HDFC Credila</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/loan-referral-programme">Loan Referral Programme</a>
                                </li>
                                <li>
                                    <a href="/404">Abroad Education Loan Tools</a>
                                    <ul>
                                        <li><a href="/education-loan-emi-calculator">Education Loan EMI Calculator</a></li>
                                        <li><a href="/404">Compare Loan - USD Vs. INR</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/404">Loan for Upskilling Courses</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/about">Resouces</a>
                            <ul>
                                <li>
                                    <a href="/study-abroad-education-loans">Abroad Education Loan Overview</a>
                                </li>
                                <li>
                                    <a href="/">Our Lending Partners?</a>
                                    <ul>
                                        <li><a href="/sbi-education-loan">SBI</a></li>
                                        <li><a href="/bob-education-loan">BOB</a></li>
                                        <li><a href="/axis-education-loan">Axis</a></li>
                                        <li><a href="/icici-education-loan">ICICI</a></li>
                                        <li><a href="/incred-education-loan">Incred</a></li>
                                        <li><a href="/avanse-education-loan">Avanse</a></li>
                                        <li><a href="/auxilo-education-loan">Auxilo</a></li>
                                        <li><a href="/idfc-education-loan">IDFC</a></li>
                                        <li><a href="/ubi-education-loan">UBI</a></li>
                                        <li><a href="/prodigy-finance-education-loan">Prodigy</a></li>
                                        <li><a href="/mpower-financing-education-loan">MPower</a></li>
                                        <li><a href="/hdfc-credila-education-loan">HDFC Credila</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/loan-referral-programme">Loan Referral Programme</a>
                                </li>
                                <li>
                                    <a href="/404">Abroad Education Loan Tools</a>
                                    <ul>
                                        <li><a href="/education-loan-emi-calculator">Education Loan EMI Calculator</a></li>
                                        <li><a href="/404">Compare Loan - USD Vs. INR</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/404">Loan for Upskilling Courses</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Community</a>
                            <ul>
                                <li>
                                    <a href="/study-abroad-education-loans">Abroad Education Loan Overview</a>
                                </li>
                                <li>
                                    <a href="/">Our Lending Partners?</a>
                                    <ul>
                                        <li><a href="/sbi-education-loan">SBI</a></li>
                                        <li><a href="/bob-education-loan">BOB</a></li>
                                        <li><a href="/axis-education-loan">Axis</a></li>
                                        <li><a href="/icici-education-loan">ICICI</a></li>
                                        <li><a href="/incred-education-loan">Incred</a></li>
                                        <li><a href="/avanse-education-loan">Avanse</a></li>
                                        <li><a href="/auxilo-education-loan">Auxilo</a></li>
                                        <li><a href="/idfc-education-loan">IDFC</a></li>
                                        <li><a href="/ubi-education-loan">UBI</a></li>
                                        <li><a href="/prodigy-finance-education-loan">Prodigy</a></li>
                                        <li><a href="/mpower-financing-education-loan">MPower</a></li>
                                        <li><a href="/hdfc-credila-education-loan">HDFC Credila</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/loan-referral-programme">Loan Referral Programme</a>
                                </li>
                                <li>
                                    <a href="/404">Abroad Education Loan Tools</a>
                                    <ul>
                                        <li><a href="/education-loan-emi-calculator">Education Loan EMI Calculator</a></li>
                                        <li><a href="/404">Compare Loan - USD Vs. INR</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/404">Loan for Upskilling Courses</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/newui_study_abroad">Company</a>
                            <ul>
                                <li><a href="/newui_scholarship">Scholarships</a></li>
                                <li>
                                    <a href="/newui_country_landing">Countries</a>
                                    <ul>
                                        <li>
                                            <a href="/newui_country_individual">USA</a>
                                        </li>
                                        <li>
                                            <a href="/404">Canada</a>
                                        </li>
                                        <li>
                                            <a href="/404">Germany</a>
                                        </li>
                                        <li>
                                            <a href="/404">Australia</a>
                                        </li>
                                        <li>
                                            <a href="/404">United Kingdom</a>
                                        </li>
                                        <li>
                                            <a href="/404">New Zealand</a>
                                        </li>
                                        <li>
                                            <a href="/404">Ireland</a>
                                        </li>
                                        <li>
                                            <a href="/404">France</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/stem/masters-courses">Courses</a></li>
                                <li>
                                    <a href="/newui_exams_home">Exams</a>
                                    <ul>
                                        <li><a href="newui_ielts_individual">IELTS</a></li>
                                        <li><a href="/404">TOEFL</a></li>
                                        <li><a href="/404">GRE</a></li>
                                        <li><a href="/404">GMAT</a></li>
                                        <li><a href="/404">SAT</a></li>
                                        <li><a href="/404">PTE</a></li>
                                        <li><a href="/404">ACT</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/404">Complete Study Abroad Guide</a>
                                </li>
                                <li>
                                    <a href="/404">Services</a>
                                    <ul>
                                        <li><a href="/404">USA Credit Card</a></li>
                                        <li><a href="/404">Accomodation</a></li>
                                        <li><a href="/404">Visa Counselling</a></li>
                                        <li><a href="/404">Travel/Forex Card</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/404">Tools</a>
                                    <ul>
                                        <li><a href="/newui_admit_input">Admit Predictor</a></li>
                                        <li><a href="/404">SOP Review</a></li>
                                        <li><a href="/404">University Compare</a></li>
                                        <li><a href="/404">Grade Converter</a></li>
                                        <li><a href="/404">Estimate Future Earnings</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><a href="/404">Pricing</a>
                            <ul>
                                <li><a href="/newui_event_home">Events</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                                <li><a href="https://discussions.gyandhan.com/">Discussion Forum</a></li>
                            </ul>
                        </li>


                    </ul>
                    <div className="flex items-center md:hidden">
                        <a
                            className="sign-up-btn rounded-full font-semibold flex gap-2 px-5 py-2 bg-black text-white cursor-pointer hover:bg-[#9170e6]"
                        >
                            <div>Sign Up </div>
                            <div><img src={window.location.origin + "/images/up-arrow.svg"} /></div>
                        </a>
                        <button id="mobile-menu-toggle" className="ml-4 h-fit w-fit p-2 shadow">
                            <img src="" />
                        </button>
                    </div>
                    <div className="md:flex font-medium text-xs lg:text-[0.9375rem] hidden">
                        <a
                            className="px-3 py-1 lg:px-6 lg:py-2 hover:text-[#9170e6] cursor-pointer"
                        >Log in</a
                        >
                        <a
                            className="sign-up-btn rounded-full font-semibold flex gap-2 px-5 py-2 bg-black text-white cursor-pointer hover:bg-[#9170e6]"
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

