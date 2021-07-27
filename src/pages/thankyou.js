import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"

export default function Example() {

    return (
        <>
            <Seo title="Welcome" />
            <Layout >
                <div className="bg-white pb-24 px-6 lg:px-8">
                    <div className="relative max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Thanks for signing up <span role="img" aria-label="raised hands">🙌</span></h1>
                            <p className="mt-4 text-lg leading-6 text-gray-500">
                                We'll send you frequent updates on our changelog and user research best practices!
                            </p>
                        </div>
                    </div>
                </div>
                <Banner />
            </Layout >
        </>
    )
}
