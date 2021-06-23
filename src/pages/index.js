import * as React from "react"
import Layout from "../components/layout"
import FeatureSection from "../components/feature-section"
import { StaticImage } from "gatsby-plugin-image"

export default function Example() {
    return (
        <Layout>
            <div className="">
                <div className="relative overflow-hidden">

                    <div className="relative pt-6 pb-16 sm:pb-24">

                        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                            <div className="text-center">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">All your Customer Research</span>
                                    <span className="block text-blue-600">in A Single Place.</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Streamline your customer research with our collaborative interface.
                                </p>
                                <p className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
                                    No more missing sheets, non-connected airtables, lost interview notes & video recordings - we bring it all into one space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                            <div className="flex-1" />
                            <div className="flex-1 w-full bg-blue-800" />
                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <img
                                className="relative rounded-lg shadow-lg"
                                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-blue-800">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <h2 className="text-center text-white text-sm font-semibold uppercase tracking-wide">
                            Trusted by great customer-centric companies
                        </h2>
                        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

                    <div className="relative">
                        <h2 className="text-center text-6xl font-extrabold text-gray-900 tracking-tight">
                            Finally, a powerful research tool that is being loved by anyone in the company ♥️
                        </h2>
                    </div>

                    <FeatureSection
                        headline="interview guides"
                        title="Create interview guides"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-guide.png"
                            alt=""
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="take notes together"
                        title="Make note taking a team sport"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-note.png"
                            alt=""
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="upload recordings"
                        title="Keep your videos recordings in the loop"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-video.png"
                            alt=""
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="tag notes"
                        title="Tag content and save key moments"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-tag.png"
                            alt=""
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="compare interviews"
                        title="Compare interviews and extract insights faster"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-analysis.png"
                            alt=""
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="import quantitative data"
                        title="Quantitative and qualitative research now live together"
                        descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                                Totam, velit."
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-quantitative.png"
                            alt=""
                        />
                    </FeatureSection>

                    <div className="bg-blue-700 mt-32 rounded-2xl">
                        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">Built for Atomic Research</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-blue-200">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                            </p>
                            <a
                                href="#"
                                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                            >
                                Sign up for free
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </Layout>
    )
}