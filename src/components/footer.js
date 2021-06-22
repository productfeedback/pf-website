import React from "react"
// import { Link } from "gatsby"
import logo from "../../src/images/logo.svg"

const navigation = {
    main: [
        { name: 'Legal Notice', href: '/legal-notice' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
    ],
}

export default function Example() {
    return (
        <footer className="bg-white" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto pt-12 py-2 px-4 sm:px-6 lg:px-8">
                <img
                    className="h6 w-auto"
                    src={logo}
                    alt="Workflow"
                />
                <h3 className="mt-2 text-xl font-thin text-200 tracking-wider">
                    Take the most out of your customer research.
                </h3>
            </div>
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-2 xl:gap-8">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <a href="mailto:q@productfeedback.com" title="Contact Us" className="text-base text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </li>
                        {navigation.main.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="">
                        <h3 className="mt-6 xl:text-right text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Subscribe to our newsletter
                        </h3>
                        <form className="mt-2 sm:flex sm:max-w-md xl:float-right">
                            <label htmlFor="emailAddress" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="emailAddress"
                                id="emailAddress"
                                autoComplete="email"
                                required
                                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                                placeholder="Enter your email"
                            />
                            <div className="mt-1 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="mt-16">
                    <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()}, Product Feedback. All
                        rights reserved.
                    </p>
                    <p className="text-center text-base text-gray-400">
                        Made with <span role="img" aria-label="love">💙</span> from <span role="img" aria-label="France">🇫🇷</span> & <span role="img" aria-label="czech republic">🇨🇿</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}
