import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const blogPost = ({ pageContext, data }) => {

const { title, author, image, subtitle, content } = data.contentfulPost;

  return (
  
    <div className="container mb-5">
    <Header/>
    <div className="row">
      <div className="col-12">
      <div className="blog-posts d-flex justify-content-center align-items-center">
          <article>
          
            <h1>{title}</h1>
            <p>{subtitle}</p>
          
            <img src={image.fluid.src} alt={title} className="my-4"></img>
           
            <div dangerouslySetInnerHTML={{__html: content.childContentfulRichText.html}}></div>
            <p className="author mt-5"><FormattedMessage id="author"/>: {author}</p>
          </article>
          </div>
          <Link to="/blog" className="uppercase mt-3 d-block d-lg-none">Back to Blog</Link>
      </div>

      <Link to="/blog" className="uppercase mt-5 d-none d-lg-block">Back to Blog</Link>
    </div>

    </div>
  
  )
  }

export const pageQuery = graphql`
    query blogpost($slug: String!, $locale: String){
    contentfulPost(slug: { eq:$slug }, node_locale: { eq: $locale }){
      title
      slug
      author
      subtitle
      node_locale
      image{
        fluid{
          src
        }
      }
      content{
        childContentfulRichText{
          html
        }
      }
    
    }
  }
  `
 export default injectIntl(blogPost)