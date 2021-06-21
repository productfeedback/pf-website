import React from "react"
import { Link } from "gatsby"

const navigation = {
    main: [
        { name: 'Legal Notice', href: '/legal-notice' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
    ],
}

export default function Example() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div key="Contact Us" className="px-5 py-2">
                        <a href="mailto:q@productfeedback.com" title="Contact Us" className="text-base text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 text-center">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Subscribe to our newsletter
                    </h3>
                    <form className="sm:flex sm:max-w-md m-auto mt-1">
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
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="uppercase font-light w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()}, Product Feedback. All
                    rights reserved.</p>
                <p className="text-center text-base text-gray-400">
                    Made with <span role="img" aria-label="love">💙</span> from <span role="img" aria-label="France">🇫🇷</span> & <span role="img" aria-label="czech republic">🇨🇿</span>.
                </p>
                <p>

                </p>
            </div>
        </footer>
    )
}
