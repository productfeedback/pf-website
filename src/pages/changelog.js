import React from "react"
import { graphql } from "gatsby"

export default function Changelog({ data }) {
    const { changelogs } = data.changelog

    return (
        <div>
            <h1>Changelog</h1>

            {changelogs.map(changelog => (
                <article key={changelog.id}>
                    <h2>{changelog.frontmatter.title}</h2>
                    <small>{changelog.frontmatter.author}, {changelog.frontmatter.date}</small>
                    <p>{changelog.excerpt}</p>
                </article>
            ))}
        </div>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    changelog: allMarkdownRemark {
      changelogs: nodes {
        frontmatter {
          date(fromNow: true)
          title
        }
        excerpt
        id
      }
    }
  }
`