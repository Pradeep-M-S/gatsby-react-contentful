import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
// import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
// import AniLink from "gatsby-plugin-transition-link/AniLink" 
// import { array } from "prop-types"

const blog = ({data}) => {
const postContent = data.allContentfulPost.edges;

console.log(postContent);
  return (

    <div className="blog">
    <SEO title="Blog"/>
        <div>
        <h1 className="mb-5">Blog</h1>
              {
              postContent.map(({ node: post }) => (
    
                  <div className="row blog--row">
                       <div className="col-lg-6 order-2 order-lg-1">
                        <Link  to={`/blog/${post.slug}/`}>
                         <article className="blog__page d-flex flex-column" key={post.id}>
                            <img src={post.image.fluid.src} alt={post.title}></img>
                         </article>
                        </Link>    
                      </div>

                      <div className="col-lg-6 order-2 order-lg-2">
                        <div className="blog__page--info">
                        <h2>{post.title}</h2>
                          <p className="mb-3">{post.subtitle}</p>
                        
                          <Link to={`/blog/${post.slug}/`} className="mt-auto"><div className="neu-btn">Read more</div></Link>
                        </div>
                      </div>
                  </div>
                   
              )
              )}
            </div>
        </div>

  )
          }      

export default injectIntl(blog)


export const query = graphql`
query pageQuery($locale: String){
  allContentfulPost (filter: { node_locale: { eq: $locale } }){
    edges{
      node{
      title
      author
      node_locale
      slug
      subtitle
      id
      image{
        fluid{
          src
        }
      }
    }
  }
    }
  }
  `;

  