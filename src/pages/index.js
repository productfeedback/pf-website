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
                </div>
            </div>
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

                    <div className="relative">
                        <h2 className="text-center text-6xl font-extrabold text-gray-900 tracking-tight">
                            Finally, a powerful research tool that anyone in the company will love ♥️
                        </h2>
                    </div>

                    <FeatureSection
                        headline="interview guides"
                        title="Start every interview on the same page"
                        descr="Create step by step guides before starting your user interviews."
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
                        title="From messy notes to reusable insights"
                        descr="Compare all your interview responses at once, sort highlighted verbatims, and extract key insights faster."
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
                        descr="Import and analyze your Product surveys, NPS surveys, UX surveys, and more."
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
                            <h2 className="text-3xl md:text-5xl font-bold text-white sm:text-4xl">
                                <span className="block">Built for Atomic Research</span>
                            </h2>
                        </div>
                    </div>

                    <div class="mx-auto max-w-screen-xl px-6 md:px-10 pt-16 pb-10 mt-16 md:mt-24 bg-gray-200 md:rounded-3xl">
                        <h2 class="pb-4 text-3xl md:text-5xl font-bold text-gray-900 tracking-snug leading-10 md:leading-15 text-center">Integrate all your essential tools</h2>
                        <p class="pb-6 text-gray-500 text-lg md:text-2xl text-center leading-normal md:leading-normal">We play nicely with other tools in your research workflow.</p>

                        <div class="pt-6 sm:pt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-6">
                            <div class="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/typeform.png"
                                    width={80}
                                    height={80}
                                    alt="Logo Typeform"
                                />
                                <div>
                                    <h3 class="pb-1 md:pb-2 text-gray-800 font-semibold text-lg md:text-xl leading-6">Typeform</h3>
                                    <p class="text-gray-500 md:text-lg">Import surveys, analyze responses and categorize them.</p>
                                </div>
                            </div>
                            <div class="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/zapier.png"
                                    width={80}
                                    height={80}
                                    alt="Logo Zapier"
                                />
                                <div>
                                    <h3 class="flex items-center pb-1 md:pb-2 text-gray-500 font-semibold text-lg md:text-xl leading-6">
                                        Zapier
                                        <div class="ml-3 px-2 py-1 leading-none text-xs font-semibold rounded-full bg-yellow-300 text-white">Soon</div>
                                    </h3>
                                    <p class="text-gray-400 md:text-lg">Import surveys and customer feedback from 3,000+ apps.</p>
                                </div>
                            </div>
                            <div class="flex space-x-6 p-6 bg-white rounded-lg">
                                <StaticImage
                                    className="flex-shrink-0 mb-6 w-10 h-10 rounded-lg"
                                    src="../images/logos/zoom.jpeg"
                                    width={80}
                                    height={80}
                                    alt="Logo Zoom"
                                />
                                <div>
                                    <h3 class="flex items-center pb-1 md:pb-2 text-gray-500 font-semibold text-lg md:text-xl leading-6">
                                        Zoom
                                        <div class="ml-3 px-2 py-1 leading-none text-xs font-semibold rounded-full bg-yellow-300 text-white">Soon</div>
                                    </h3>
                                    <p class="text-gray-400 md:text-lg">Import Zoom video recordings in a single click.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Layout>
    )
}