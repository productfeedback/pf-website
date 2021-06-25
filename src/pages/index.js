import * as React from "react"
import Layout from "../components/layout"
import FeatureSection from "../components/feature-section"
import { StaticImage } from "gatsby-plugin-image"

export default function Example() {
    return (
        <Layout>
            <div className="">
                <div className="relative overflow-hidden">

                    <div className="relative pt-6 pb-20">

                        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-32 sm:px-6">
                            <div className="text-center">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">All your Customer Research</span>
                                    <span className="block text-blue-600">in A Single Place.</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base font-light text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Streamline your customer research with our collaborative interface.
                                </p>
                                <p className="max-w-md mx-auto text-base font-light text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
                                    No more missing sheets, non-connected airtables, lost interview notes & video recordings - we bring it all into one space.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative text-center bg-gradient-to-t from-yellow-200 pt-12">
                        <StaticImage
                            className="relative mx-auto max-w-4xl h-auto border-r border-l border-t rounded-t-2xl shadow-xl"
                            src="../images/home-hero.jpg"
                            alt="Product Feedback"
                        />
                    </div>
                </div>
                {/* <div className="bg-blue-700">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-center text-white text-sm font-semibold uppercase tracking-wide">
                            Trusted by great customer-centric companies
                        </h2>
                        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <StaticImage
                                    className="h-12"
                                    src="../images/logos/amalia.svg"
                                    alt="Logo Amalia"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <StaticImage
                                    className="h-12"
                                    src="../images/logos/amalia.svg"
                                    alt="Logo Amalia"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <StaticImage
                                    className="h-12"
                                    src="../images/logos/amalia.svg"
                                    alt="Logo Amalia"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <StaticImage
                                    className="h-12"
                                    src="../images/logos/amalia.svg"
                                    alt="Logo Amalia"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <StaticImage
                                    className="h-12"
                                    src="../images/logos/amalia.svg"
                                    alt="Logo Amalia"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="py-16 bg-white overflow-hidden lg:py-32">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

                    <div className="relative">
                        <h2 className="text-center text-6xl font-extrabold text-gray-900 tracking-tight">
                            Finally, a powerful research tool that anyone in the company will love &hearts;
                        </h2>
                    </div>

                    <FeatureSection
                        headline="interview guides"
                        title="Start every interview on the same page"
                        descr="Create detailed step-by-step guides before starting any batch of user interviews."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-guide.png"
                            alt="Create user interview guides"
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="take notes together"
                        title="Make note-taking a team sport"
                        descr="Take live user interview notes all together with all the participants."
                        beta
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-note.png"
                            alt="Take notes together in Product Feedback"
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="upload recordings"
                        title="Keep your videos recordings in the loop"
                        descr="Never lose any video recording anymore, they're now linked to your interview notes."
                        beta
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-video.png"
                            alt="Upload video recordings in Product Feedback"
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="tag notes"
                        title="Save key moments"
                        descr="Highlight important parts of your interviews; comparing your interviews will then be a child's play!"
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-tag.png"
                            alt="Tag note content in Product Feedback"
                        />
                    </FeatureSection>
                    <FeatureSection
                        headline="compare interviews"
                        title="From messy notes to reusable insights"
                        descr="Compare all your interview responses at once, sort highlighted verbatims, and extract key insights faster."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-analysis.png"
                            alt="compare user interviews in Product Feedback"
                        />
                    </FeatureSection>

                    <div className="relative">
                        <h2 className="text-center text-6xl font-extrabold text-gray-900 tracking-tight mt-18 sm:mt-16 lg:mt-32">
                            Quantitative and qualitative research now live together!
                        </h2>
                    </div>

                    <FeatureSection
                        headline="import surveys"
                        title="One single place for all your customer feedback"
                        descr="You can import all types of customer feedback in your research projects: UX surveys, NPS surveys, Product surveys, and more."
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-quantitative.png"
                            alt="import quantitative data to Product Feedback"
                        />
                    </FeatureSection>

                    <FeatureSection
                        headline="analyse at scale"
                        title="Sort customer feedback at scale"
                        descr="Identify trends in your customer feedback, archive them and build meaningful features faster."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-survey.png"
                            alt="import quantitative data to Product Feedback"
                        />
                    </FeatureSection>

                    <FeatureSection
                        headline="charts and statistics"
                        title="All your users's voice should count"
                        descr="Draw insights from imported quantitative data, MCQ survey responses or even charts created within Product Feedback."
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-draw-quanti.png"
                            alt="import quantitative data to Product Feedback"
                        />
                    </FeatureSection>

                    <div className="bg-gray-100 mt-32 rounded-2xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-gray-900">
                                <span className="block text-lg md:text-xl">Build your customer knowledge repository with</span>
                                <span className="block text-6xl font-extrabold tracking-tight">Atomic UX Research</span>
                            </h2>
                        </div>
                        <div className="max-w-4xl mt-16 mx-auto text-center">
                            <StaticImage
                                src="../images/home-atomic.svg"
                                placeholder="blurred"
                            />
                        </div>
                    </div>

                    <FeatureSection
                        headline="explore repository"
                        title="Use past insights to answer today's questions"
                        descr="Smartly store all your research learnings, so it's easily accessible to anyone."
                        left
                    >
                        <StaticImage
                            className="relative mx-auto rounded-lg shadow-lg border-grey border"
                            width={600}
                            placeholder="blurred"
                            src="../images/home-search.png"
                            alt="explore user research repository"
                        />
                    </FeatureSection>

                    <div className="mx-auto max-w-screen-xl px-6 md:px-10 pt-16 pb-10 mt-16 md:mt-24 bg-gray-100 md:rounded-3xl">
                        <h2 className="pb-4 text-3xl md:text-5xl font-bold text-gray-900 tracking-snug leading-10 md:leading-15 text-center">Integrate all your essential tools</h2>
                        <p className="pb-6 text-gray-500 text-lg md:text-2xl text-center leading-normal md:leading-normal">We play nicely with other tools in your research workflow.</p>

                        <div className="pt-6 sm:pt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-6">
                            <div className="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/typeform.png"
                                    width={80}
                                    height={80}
                                    alt="Logo Typeform"
                                />
                                <div>
                                    <h3 className="pb-1 md:pb-2 text-gray-800 font-semibold text-lg md:text-xl leading-6">Typeform</h3>
                                    <p className="text-gray-500 md:text-lg">Import surveys, analyze responses, and categorize them.</p>
                                </div>
                            </div>
                            <div className="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/zapier.png"
                                    width={80}
                                    height={80}
                                    alt="Logo Zapier"
                                />
                                <div>
                                    <h3 className="flex items-center pb-1 md:pb-2 text-gray-500 font-semibold text-lg md:text-xl leading-6">
                                        Zapier
                                        <div className="ml-3 px-2 py-1 leading-none text-xs font-semibold rounded-full bg-yellow-300 text-white">Soon</div>
                                    </h3>
                                    <p className="text-gray-400 md:text-lg">Import survey responses and customer feedback from 3,000+ apps.</p>
                                </div>
                            </div>
                            <div className="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/zoom.jpeg"
                                    width={80}
                                    height={80}
                                    alt="Logo Zoom"
                                />
                                <div>
                                    <h3 className="flex items-center pb-1 md:pb-2 text-gray-500 font-semibold text-lg md:text-xl leading-6">
                                        Zoom
                                        <div className="ml-3 px-2 py-1 leading-none text-xs font-semibold rounded-full bg-yellow-300 text-white">Soon</div>
                                    </h3>
                                    <p className="text-gray-400 md:text-lg">Import Zoom video recordings in a single click.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-blue-600">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="https://app.productfeedback.com/signup"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}