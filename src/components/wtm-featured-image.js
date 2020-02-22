import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WTMImage = ({ classes }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "wtm-gattering-firebase-summit.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className={classes}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default WTMImage
