import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Calendly = () => {
    return (
        <div className="calendly-inline-widget w-full">
            <iframe title="Book your onboarding call" src="https://calendly.com/qfrery/30min-onboarding?embed_type=Inline&amp;text_color=44464d&amp;primary_color=00a5ff" width="100%" height="1000px" frameBorder="0"></iframe>
        </div >
    )
}

export default function Example() {

    return (
        <>
            <Seo title="Book your Demo Call" />
            <Layout >
                <div className="bg-white pb-24 px-6 lg:px-8">
                    <div className="relative max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Very nice to meet you <span role="img" aria-label="raised hands">🙌</span></h1>
                            <p className="mt-4 text-lg leading-6 text-gray-500">
                                Schedule a <span className="font-bold">personalized demo call</span> with the founder. We will show you how Product Feedback can help you build amazing products with your customers.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Calendly />
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}
