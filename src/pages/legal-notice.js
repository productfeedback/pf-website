import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Legal = () => {
    return (
        <>
            <Layout>
                <Seo title="Legal Notice" />
                <div className="relative bg-white prose max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                    <h1>Legal Notice</h1>
                    <h3>Product Feedback SARL</h3>
                    <p>6 rue Dieudé</p>
                    <p>13006 Marseille</p>
                    <p>France</p>
                    <p><a href="mailto:q@productfeedback.com">q@productfeedback.com</a></p>
                    <h3>Managing Directors</h3>
                    <p>Quentin Fréry</p>
                    <p>Kim Gjerstad</p>
                    <h3>VAT-ID</h3>
                    <p>FR50883565285</p>
                    <h3>SIRET</h3>
                    <p>88356528500011</p>
                    <h3>RCS Marseille</h3>
                    <p>883 565 285</p>
                    <h3>Web hosting</h3>
                    <p>Amazon Web Services Inc. (application)</p>
                    <p>Netlify Inc. (public website)</p>
                    <h3>Payment service provider</h3>
                    <p>Stripe Payments Europe Ltd</p>
                    <br /><hr />
                    <p>We assume no liability for the content of websites linked to us.</p>
                    <p>The owners of these linked websites take sole responsibility for their contents.</p>
                </div>
            </Layout>
        </>
    )
}

export default Legal
