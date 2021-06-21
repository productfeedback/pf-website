import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Changelog({ data }) {
  const { changelogs } = data.changelog

  return (
    <Layout>
      <div className="relative py-16 bg-white">
        {changelogs.map(changelog => (

          <div className="relative px-4 sm:px-6 lg:px-8 m-20">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-blue-600 font-semibold tracking-wide uppercase">
                  {changelog.frontmatter.date}
                </span>
                <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {changelog.frontmatter.title}
                </span>
              </h1>
              <div className="mt-6 prose prose-indigo prose-lg mx-auto">
                <section
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: changelog.html }}
                  itemProp="articleBody"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    changelog: allMarkdownRemark {
      changelogs: nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        html
        id
      }
    }
  }
`