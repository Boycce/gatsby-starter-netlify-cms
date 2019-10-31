// @flow
import React, {useState, useEffect, useRef} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Col} from 'reactstrap'
import Slider from 'react-slick'

import bgSlider from '../../img/bg-slider1.jpg'
import bgSlider2 from '../../img/bg-slider2.jpg'
import arrowRight from '../../img/arrow-right-blue.png'

import './styles.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
}

const content = [
  {
    title: 'Low commission/margin rate',
    description: 'minimium comm./trade: 0 for HK, US$0.99 for US',
    featuredImage: bgSlider,
  },
  {
    title: 'Greater security of account assets',
    description: 'minimium comm./trade: 0 for HK, US$0.99 for US',
    featuredImage: bgSlider,
  },
  {
    title: 'Exclusive info at your fingertips',
    description: "Snowball's unique stock intel keeps you ahead of the game",
    featuredImage: bgSlider2,
  },
]

// const BlogRoll = props => {
//   const {data} = props
//   const {edges: posts} = data.allMarkdownRemark

//   return (
//     <Slider {...settings}>
//       {content.map(({node: post}) => {
//         const {title, description, featuredimage} = post.frontmatter
//         return (
//           <StyledCol>
//             <OuterContainer>
//               <ImgContainer>
//                 {featuredimage && (
//                   <Img
//                     fluid={featuredimage.childImageSharp.fluid}
//                     imgStyle={{height: '100%'}}
//                     style={{height: '100%', objectFit: 'cover'}}
//                   />
//                 )}
//                 <Overlay />
//               </ImgContainer>
//               <div className="container blog-inner-container">
//                 <div>
//                   <h5 className="lead mb-2">{title}</h5>
//                   <small className="mb-3 blog-desc mb-3">{description}</small>
//                   <div className="mt-5">
//                     <Link to={'/how-it-works' || post.fields.slug}>
//                       <StyledButton
//                         className="btn btn-outline-primary rounded-pill "
//                         type="button"
//                         style={{borderColor: 'white', color: 'white'}}
//                       >
//                         Get Started
//                       </StyledButton>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="mt-5">
//                   <h3>&gt;</h3>
//                 </div>
//               </div>
//             </OuterContainer>
//           </StyledCol>
//         )
//       })}
//     </Slider>
//   )
// }
class BlogRoll extends React.Component {
  state = {
    currentNdx: 0,
    isHovering: false,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({currentNdx: (prevState.currentNdx + 1) % 3}))
    }, 2000)
  }

  render() {
    return (
      <Slider {...settings}>
        {content.map((post, ndx) => {
          const {title, description, featuredImage} = post
          return (
            <StyledCol
              className={`${
                !this.state.isHovering && this.state.currentNdx === ndx ? 'card-hover' : ''
              }`}
              onMouseEnter={() => {
                this.setState({isHovering: true})
              }}
              onMouseLeave={() => {
                this.setState({isHovering: false})
              }}
            >
              <OuterContainer>
                <ImgContainer className="img-hover">
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      style={{height: '100%', objectFit: 'cover', width: '100%'}}
                      className={`${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'img-hover' : ''
                      }`}
                    />
                  )}
                  <Overlay />
                </ImgContainer>
                <div className="container blog-inner-container">
                  <div className="" style={{marginTop: '20%'}}>
                    <h5
                      className={`lead mb-2 ${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'small-hover' : ''
                      }`}
                    >
                      {title}
                    </h5>
                    <small
                      className={`mb-3 blog-desc mb-3 ${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'small-hover' : ''
                      }`}
                    >
                      {description}
                    </small>
                    <div className="mt-5">
                      <AniLink fade to={'/how-it-works' || post.fields.slug}>
                        <StyledButton
                          className={`btn btn-outline-primary rounded-pill button-hover ${
                            !this.state.isHovering && this.state.currentNdx === ndx
                              ? 'button-hover'
                              : ''
                          }`}
                          type="button"
                          style={{borderColor: 'white', color: 'white'}}
                        >
                          Get Started
                        </StyledButton>
                      </AniLink>
                    </div>
                  </div>
                  <div className="mt-5">
                    <img src={arrowRight} alt="" style={{height: '30px'}} />
                  </div>
                </div>
              </OuterContainer>
            </StyledCol>
          )
        })}
      </Slider>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.3); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledButton = styled.button`
  opacity: 0;
`

const ImgContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: 426px) {
    height: 25vh;
  }
`

const StyledCol = styled(Col)`
  border-left: 0.5px solid #ddd;
  height: 40vh;
  /* :last-child {
    border-right: 0.5px solid #aaaaaa;
  } */

  :hover {
    border: none;

    + div {
      border-left: none;
    }
  }

  @media (max-width: 426px) {
    border: none !important;
  }
`

const OuterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #006fbb;
  transition: 0.2s;

  :hover {
    color: white;
    margin-top: -2rem;

    box-shadow: 0 11px 16px 0 rgba(0, 0, 0, 0.3);

    ${ImgContainer} {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;

      :hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    }

    small {
      color: white !important;
    }
  }

  @media (max-width: 426px) {
    height: 25vh;
  }
`

// export default () => {
//   const data = useStaticQuery(graphql`
//     query BlogRollQuery {
//       allMarkdownRemark(
//         sort: {order: DESC, fields: [frontmatter___date]}
//         filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 400)
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               description
//               templateKey
//               date(formatString: "MMMM DD, YYYY")
//               featuredpost
//               featuredimage {
//                 childImageSharp {
//                   fluid(maxWidth: 200, quality: 100) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return <BlogRoll data={data} />
// }
