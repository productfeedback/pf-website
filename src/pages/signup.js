import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Switch } from '@headlessui/react'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Signup To Product Feedback</h2>
                    {/* <p className="mt-4 text-lg leading-6 text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                        arcu.
                    </p> */}
                </div>
                <div className="mt-12">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
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
                                    name="last_name"
                                    id="last_name"
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
                                    name="company"
                                    id="company"
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
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="border-2 py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-blue-100 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-blue-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <div className="ml-3">
                                    <p className="text-base text-gray-500">
                                        By selecting this, you agree to the{' '}
                                        <Link
                                            className="font-medium text-gray-700 underline"
                                            to="/terms-conditions"
                                        >
                                            Terms and Conditions
                                        </Link>
                                        {' '}and{' '}
                                        <Link
                                            className="font-medium text-gray-700 underline"
                                            to="/privacy-policy"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
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
        </div>
    )
}
