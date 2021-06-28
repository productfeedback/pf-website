import * as React from "react"
import logo from "../../src/images/logo_header.svg"
import SEO from "../components/seo"

export default function Example() {

    return (
        <>
            <SEO title="Signup to Product Feedback" />
            <div className="bg-white py-24 px-6 lg:px-8">
                <div className="relative max-w-xl mx-auto">
                    <div className="text-center">
                        <img
                            className="h-12 w-auto mx-auto"
                            src={logo}
                            alt="Logo Product Feedback"
                        />
                        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Signup To Product Feedback</h1>
                    </div>
                    <div className="mt-12">
                        <form
                            action="https://productfeedback.us7.list-manage.com/subscribe/post?u=bfd053de113053a80ae11dcea&amp;id=d246c6cae0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            target="_blank"
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            novalidate
                        >
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="FNAME"
                                        id="mce-FNAME"
                                        autoComplete="given-name"
                                        className="border-2 py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-blue-100 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="LNAME"
                                        id="mce-LNAME"
                                        autoComplete="family-name"
                                        className="border-2 py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-blue-100 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="COMPANY"
                                        id="mce-COMPANY"
                                        autoComplete="organization"
                                        className="border-2 py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-blue-100 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Work Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="mce-EMAIL"
                                        name="EMAIL"
                                        type="email"
                                        autoComplete="email"
                                        className="border-2 py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-blue-100 rounded-md"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                    <input type="text" name="b_bfd053de113053a80ae11dcea_d246c6cae0" tabindex="-1" value="" />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Get Started
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}
