import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "gatsby-theme-author-base/src/components/layout"
import PostList from "gatsby-theme-author-base/src/components/post-list"

const PostsTemplate = () => {
  const { allWordpressPost } = useStaticQuery(graphql`
    query {
        allWordpressPost(sort: { fields: date, order: ASC }) {
            nodes {
              id
              title
              tags {
                name
              }
              author {
                name
                avatar_urls {
                  wordpress_96
                }
              }
              categories {
                name
              }
              content
              date
              excerpt
              link
              slug
            }
        }
      }
  `)
  const posts = allWordpressPost.nodes
  return (
      <Layout>
        <PostList posts={posts} />
      </Layout>
  )

}
export default PostsTemplate