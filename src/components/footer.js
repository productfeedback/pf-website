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
