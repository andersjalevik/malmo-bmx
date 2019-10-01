import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Calendar from '../components/Calendar'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  heading,
  html
}) => {
  
  return (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        // backgroundAttachment: `fixed`,
      }}
    >
    </div>
    <section className="section section--gradient topdocument">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">

                <div className="columns">
                  <div className="column is-12">
                    <h1>
                      {heading}
                    </h1>
                    <p style={{marginBottom: 32}}><HTMLContent content={html} /></p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-6">
                    <h4>
                      Nyheter
                    </h4>
                    <BlogRoll />
                    <Link className="btn" to="/blog">
                      Läs mer
                    </Link>
                  </div>
                  <div className="column is-6">
                    <h4>
                      Kalender
                    </h4>
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        html={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
}

export default IndexPage



export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
    }
  }
`




/*
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="column is-6">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Nyheter
                  </h3>
                  <BlogRoll />
                  <div className="column is-6 has-text-centered">
                    <Link className="btn" to="/blog">
                      Läs mer
                    </Link>
                  </div>
                </div>
                <div className="column is-6">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Nyheter
                  </h3>
                  <BlogRoll />
                  <div className="column is-6 has-text-centered">
                    <Link className="btn" to="/blog">
                      Läs mer
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
*/