import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Seo from "../components/seo"

// markup
const NotFoundPage = () => {
  return (
    <>
      <Seo title="404: Not found" />
      <Layout>
        <main className="prose mx-auto max-w-7xl px-4 sm:px-6 pb-24">
          <title>Not found</title>
          <h1>Page not found</h1>
          <p>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
            <br />
            <Link to="/">Go home</Link>.
          </p>
        </main>
        <Banner />
      </Layout>
    </>
  )
}

export default NotFoundPage
