import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import FeatureSection from "../components/feature-section"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Example() {
    return (
        <>
            <SEO title="The product research repository for customer-centric teams." />
            <Layout>
                <div className="relative overflow-hidden">
                    <div className="relative md:pb-20">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6">
                            <div className="text-center">
                                <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
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

                    <div className="relative text-center bg-gradient-to-t from-yellow-200 pt-12 px-6 lg:px-0 h-40 md:h-auto -mt-4 md:mt-0">
                        <StaticImage
                            className="hidden md:block relative mx-auto max-w-4xl h-auto border-r border-l border-t rounded-t-2xl shadow-xl"
                            src="../images/home-hero.jpg"
                            alt="Product Feedback"
                        />
                    </div>
                </div>
                <div className="py-16 bg-white overflow-hidden lg:py-32">
                    <div className="relative mx-auto px-6 lg:px-8 md:max-w-2xl lg:max-w-7xl">

                        <div className="relative">
                            <h2 className="text-center text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
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
                            descr="Take timestamped interview notes in collaboration with your team mates."
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
                            descr="Don't lose video recordings anymore, they're now linked to your interview notes."
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
                            descr="Compare all your interview notes at once, sort highlighted verbatims, and extract key insights faster."
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
                            <h2 className="text-center mt-32 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                                Quantitative and qualitative research now live together!
                            </h2>
                        </div>

                        <FeatureSection
                            headline="import surveys"
                            title="One single place for all your customer feedback"
                            descr="You can import all types of data in your research projects: UX surveys, NPS polls, Product surveys, and more."
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
                            descr="Identify trends in survey responses, regroup them and build meaningful features faster."
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
                            title="Customer knowledge based on more voices"
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

                        <div className="bg-gray-100 mt-32 rounded-2xl pt-16 sm:pt-20 lg:py-16 p-6 lg:p-8">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-gray-900">
                                    <span className="block text-gray-500 text-lg leading-normal md:leading-normal md:text-xl">Build your customer knowledge repository with</span>
                                    <span className="block text-4xl md:text-5xl font-extrabold tracking-tight">Atomic UX Research</span>
                                </h2>
                            </div>
                            <div className="hidden lg:block max-w-4xl mt-8 md:mt-16 mx-auto text-center">
                                <StaticImage
                                    src="../images/home-atomic.svg"
                                    placeholder="blurred"
                                    alt="atomic research explained"
                                />
                            </div>
                            <div className="block lg:hidden mt-16">
                                <div className="mx-auto mt-6 w-full text-center p-4 rounded-lg bg-green-200">
                                    <span className="block font-bold text-2xl text-green-800">Projects</span>
                                    <span className="block uppercase text-xs text-gray-600">What we did</span>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center">
                                    <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Type=chevrons-down">
                                            <path id="Path 3" d="M7 13L12 18L17 13" stroke="#4E4E4E" strokeLinecap="round" />
                                            <path id="Path 3_2" d="M7 7L12 12L17 7" stroke="#4E4E4E" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center p-4 rounded-lg bg-yellow-100">
                                    <span className="block font-bold text-2xl text-yellow-800">Facts</span>
                                    <span className="block uppercase text-xs text-gray-600">What users said</span>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center">
                                    <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Type=chevrons-down">
                                            <path id="Path 3" d="M7 13L12 18L17 13" stroke="#4E4E4E" strokeLinecap="round" />
                                            <path id="Path 3_2" d="M7 7L12 12L17 7" stroke="#4E4E4E" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center p-4 rounded-lg bg-red-100">
                                    <span className="block font-bold text-2xl text-red-800">Insights</span>
                                    <span className="block uppercase text-xs text-gray-600">What we think that meant</span>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center">
                                    <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Type=chevrons-down">
                                            <path id="Path 3" d="M7 13L12 18L17 13" stroke="#4E4E4E" strokeLinecap="round" />
                                            <path id="Path 3_2" d="M7 7L12 12L17 7" stroke="#4E4E4E" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="mx-auto mt-2 w-full text-center p-4 rounded-lg bg-blue-50">
                                    <span className="block font-bold text-2xl text-blue-900">Recommendations</span>
                                    <span className="block uppercase text-xs text-gray-600">What we should do next</span>
                                </div>
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

                        <div className="bg-gray-100 mt-32 rounded-2xl pt-16 sm:pt-20 lg:pt-20 p-6 lg:p-8">
                            <h2 className="pb-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-snug leading-10 md:leading-15 text-center">Integrate all your essential tools</h2>
                            <p className="pb-6 text-gray-500 text-lg md:text-2xl text-center leading-normal md:leading-normal">We play nicely with other tools in your research workflow.</p>

                            <div className="pt-6 sm:pt-12 grid lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-6">
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
                                        <p className="text-gray-400 md:text-lg">Import any customer data from 3,000+ apps.</p>
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
                                        <p className="text-gray-400 md:text-lg">Download your Zoom video recordings in a single click.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
            </Layout>
        </>
    )
}