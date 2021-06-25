import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
    tiers: [
        {
            title: 'Starter',
            price: '$20',
            frequency: 'per writer/month',
            description: 'Democratize user research ',
            features: [
                'Unlimited free seats for viewers',
                '14 days free trial',
                'No credit card required',
                'Get help from the founder to get started',
            ],
            cta: 'Get Started',
            mostPopular: false,
        },
        {
            title: 'Growth',
            price: '$500',
            frequency: '/month',
            description: 'Become a customer-centric company',
            features: [
                '20 writer seats',
                'VIP support from the founder',
                'Proritized feature requests',
                'Training sessions'
            ],
            cta: 'Schedule a demo',
            mostPopular: true,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            frequency: '',
            description: 'Industrialize customer research',
            features: [
                'Unlimited writer seats',
                'VIP support from the founder',
                'Prioritized feature requests',
                'Training sessions'
            ],
            cta: 'Schedule a demo',
            mostPopular: false,
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Layout>
            <div className="pt-40 max-w-7xl mx-auto py-24 px-6 bg-white sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                    Start building great products faster
                </h2>
                <p className="mt-6 max-w-2xl text-xl text-gray-500">
                    Product Feedback will help your product team to capitalize on user research and build meaningful products faster.
                </p>

                {/* Tiers */}
                <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    {pricing.tiers.map((tier) => (
                        <div
                            key={tier.title}
                            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                                {tier.mostPopular ? (
                                    <p className="absolute top-0 py-1.5 px-4 bg-blue-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                                        Most popular
                                    </p>
                                ) : null}
                                <p className="mt-4 flex items-baseline text-gray-900">
                                    <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                                </p>
                                <p className="mt-6 text-gray-500">{tier.description}</p>

                                {/* Feature list */}
                                <ul className="mt-6 space-y-6">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex">
                                            <CheckIcon className="flex-shrink-0 w-6 h-6 text-blue-500" aria-hidden="true" />
                                            <span className="ml-3 text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/signup"
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
                                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                )}
                            >
                                {tier.cta}

                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    )
}