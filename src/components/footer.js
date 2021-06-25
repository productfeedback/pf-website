import React from "react"
import { Link } from "gatsby"
import logo from "../../src/images/logo.svg"

const navigation = {
    legal: [
        { name: 'Legal Notice', href: '/legal-notice' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
    ],
    company: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Changelog', href: '/changelog' },
    ],
}

export default function Example() {
    return (
        <div>
            <footer className="bg-white border-t-2 border-indigo-50" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="py-16 xl:grid xl:grid-cols-3 xl:gap-8">

                        <div>
                            <div>
                                <img
                                    className="h6 w-auto"
                                    src={logo}
                                    alt="Workflow"
                                />
                                <h3 className="mt-5 text-base font-light text-gray-800 tracking-wider">
                                    Take the most out of your customer research.
                                </h3>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="mt-8 xl:mt-0">
                                <h3 className="text-base font-semibold text-gray-800 tracking-wider">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 xl:mt-0">
                                <h3 className="text-base font-semibold text-gray-800 tracking-wider">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 xl:mt-0">
                            <h3 className="text-base font-semibold text-gray-800 tracking-wider">
                                Sign up for updates and tips
                            </h3>
                            <p className="mt-4 text-base font-light text-gray-800">
                                Subscribe and receive regular updates on our changelog and user research best practices
                            </p>
                            <div id="mc_embed_signup">
                                <form className={"mt-4 sm:flex sm:max-w-md validate"} action="https://productfeedback.us7.list-manage.com/subscribe/post?u=bfd053de113053a80ae11dcea&amp;id=d246c6cae0" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                                    <div id="mce-responses" className={"clear"}>
                                        <div className={"response"} id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className={"response"} id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                        <input type="text" name="b_bfd053de113053a80ae11dcea_d246c6cae0" tabIndex="-1" />
                                    </div>
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md sm:rounded-none sm:rounded-l-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                                        placeholder="Your Work Email" />
                                    <div className="mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
                                        <button
                                            type="submit"
                                            name="subscribe"
                                            className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-md sm:rounded-none sm:rounded-r-md py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div className="py-8 border-t border-indigo-50 md:flex md:items-center md:justify-between">
                        <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()}, Product Feedback. All
                            rights reserved.
                        </p>
                        <p className="text-center text-base text-gray-400">
                            Made with <span role="img" aria-label="love">💙</span> from <span role="img" aria-label="France">🇫🇷</span> & <span role="img" aria-label="czech republic">🇨🇿</span>.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
