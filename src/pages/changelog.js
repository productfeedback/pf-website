import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Changelog({ data }) {
  const { changelogs } = data.changelog

  return (
    <>
      <Seo title="Changelog" />
      <Layout>
        <div className="changelog relative bg-white">
          {changelogs.map((changelog) => (
            <div className="relative px-6 lg:px-8 md:mx-20 mb-24 md:mb-32" key={changelog.id}>
              <div className="text-lg max-w-2xl mx-auto">
                <h1>
                  {/* <span className="block text-sm md:text-base text-blue-600 font-semibold tracking-wide uppercase">
                    {changelog.frontmatter.date}
                  </span> */}
                  <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {changelog.frontmatter.title}
                  </span>
                </h1>
                {changelog.frontmatter.featuredImage &&
                  <GatsbyImage
                    className="mt-8 rounded-lg border border-gray shadow-lg"
                    image={changelog.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                    alt={changelog.frontmatter.title}
                  />
                }
                <section
                  className="prose prose-blue max-w-2xl mt-8 mx-auto"
                  dangerouslySetInnerHTML={{ __html: changelog.html }}
                  itemProp="articleBody"
                />
              </div>
            </div>
          ))}
        </div>
        <Banner />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    changelog: allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      changelogs: nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
        id
      }
    }
  }
`