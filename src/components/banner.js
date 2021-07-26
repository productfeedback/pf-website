import React from "react"

export default function Banner() {
    return (
        <div className="bg-indigo-50">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 lg:py-24 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-blue-600">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <a
                        href="https://app.productfeedback.com/signup"
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Get Started Free
                    </a>
                </div>
            </div>
        </div>
    )
}