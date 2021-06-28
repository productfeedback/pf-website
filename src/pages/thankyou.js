import * as React from "react"
import logo from "../../src/images/logo_header.svg"

const Calendly = () => {
    return (
        <div className="calendly-inline-widget w-full" style={{ height: "1000px" }}>
            <iframe title="Book your onboarding call" src="https://calendly.com/qfrery/30min-onboarding?embed_type=Inline&amp;text_color=44464d&amp;primary_color=00a5ff" width="100%" height="100%" frameBorder="0"></iframe>
        </div >
    )
}

export default function Example() {

    return (
        <div className="bg-white py-24 px-6 lg:px-8">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <img
                        className="h-12 w-auto mx-auto"
                        src={logo}
                        alt="Logo Product Feedback"
                    />
                    <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Thanks for signing up <span role="img" aria-label="raised hands">🙌</span></h1>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Schedule a <span className="font-bold">personalized onboarding call</span> with the founder. We will create your account and show you how Product Feedback can help you build amazing products with your customers.
                    </p>
                </div>
                <div className="mt-12">
                    <Calendly />
                </div>
            </div>
        </div>
    )
}
