// @flow

import React, {useEffect} from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import {Row, Col, Container} from 'reactstrap'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
import {Controller, Scene} from 'react-scrollmagic'

import './styles.scss'
import Layout from '../../components/Layout'
import LiveStockCarousel from '../../components/LiveStockCarousel'
import TestimonyCarousel from '../../components/TestimonyCarousel'
import DownloadNow from '../../components/DownloadNow'
import BlogRoll from '../../components/BlogRoll'
import StockSection from '../../components/StocksCarousel/stockSection'
import phoneFrame from '../../../static/img/snowball-empty-phone.png'
import phoneGif from '../../../static/img/snowball-app-stock-financial_03.gif'
import videoPoster from '../../img/poster-2.png'
import phoneVideo from '../../img/SPIN-700x1080-main.mp4'
import videoSrcURL from '../../img/sailing.mp4'
import arrowDown from '../../img/arrow-down.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  image: any,
  firstSection: {
    mainText: string,
    description: string,
    buttonText: string,
    image: string,
  },
  stockSection: {
    title: string,
    backgroundImage: any,
    stocks: Array<{
      country: string,
      countryCode: string,
      commission: [
        {
          price: string,
          text: string,
        }
      ],
    }>,
  },
  featureSection: {
    mainText: string,
    subText: string,
    description: string,
    buttonText: string,
    image: any,
    gifs: Array<{
      gif: any,
    }>,
  },
  blurb: {
    mainText: string,
    subText: string,
  },
  realTimeStockSection: {
    mainText: string,
    description: string,
    buttonText: string,
    stockList: Array<{
      stock: String,
      image: any,
      value: String,
      rate: String,
      percent: String,
      abbreviation: String,
    }>,
  },
  testimonials: Array<{
    customerName: string,
    customerPosition: string,
    backgroundImage: string,
    videoUrl: string,
  }>,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export const IndexPageTemplate = ({
  image,
  firstSection,
  stockSection,
  featureSection,
  blurb,
  realTimeStockSection,
  testimonials,
  downloadNow,
}: Props) => {
  const changeZIndex = () => {
    if (
      (document.body.scrollTop > 150 && document.body.scrollTop < 750) ||
      (document.documentElement.scrollTop > 150 && document.documentElement.scrollTop < 750)
    ) {
      const currentVideo = document.getElementById('phoneVideo')
      currentVideo.play()
    } else {
      document.getElementById('footer').style.zIndex = '-2'
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById('footer').style.zIndex = '-1'
    } else {
      document.getElementById('footer').style.zIndex = '-2'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeZIndex)

    return () => {
      window.removeEventListener('scroll', changeZIndex)
    }
  })

  useEffect(() => {
    const currentVideo = document.getElementById('mainVideo')
    currentVideo.play()
  }, [])

  return (
    <>
      {/* Hero Video */}
      <Jumbotron className="full-width-image-container d-flex justify-content-center align-items-center flex-column text-right">
        <ImageContainer>
          <StyledVideo
            id="mainVideo"
            loop
            width="100%"
            muted="true"
            preload="auto"
            src={videoSrcURL}
            autoplay
            className="video"
            poster={videoPoster}
          >
            <track kind="captions" />
          </StyledVideo>
          <Overlay />
        </ImageContainer>
        <div className="text-right">
          <h1 className="big-text">Global Markets</h1>
          <h3 className="big-subtitle text-right text-primary">at your fingertips</h3>
        </div>

        <a href="#fast-secure-trusted">
          <img
            src={arrowDown}
            alt=""
            style={{bottom: '30px', height: '25px', position: 'absolute'}}
          />
        </a>
      </Jumbotron>
      <div
        className="landing-page"
        style={{zIndex: 2, background: 'white'}}
        id="fast-secure-trusted"
      >
        {/* Fast Secure Trusted or Second */}
        <Container fluid className="second-section">
          <Row className="justify-content-center h-100">
            <Col md={5} lg={4} className="left-text-col">
              <Fade bottom>
                <h1 className="text-primary display-2 mb-3">{firstSection.mainText}</h1>
                <p>{firstSection.description}</p>
                <div>
                  <a href="https://www.snowballsecurities.com/download">
                    <button className="btn btn-outline-primary rounded-pill " type="button">
                      {firstSection.buttonText}
                    </button>
                  </a>
                </div>
              </Fade>
            </Col>
            <div className="col-md-3 d-none d-md-block">
              <Fade bottom>
                <video
                  src={phoneVideo}
                  style={{maxWidth: '300px'}}
                  id="phoneVideo"
                  muted="true"
                  preload="auto"
                />
              </Fade>
            </div>
          </Row>
        </Container>
        {/* Stock Section or Third */}

        <section className="">
          <StockRow className="h-100 stock-section no-gutters">
            <Col md={6} xs={12} style={{backgroundColor: '#006fbb'}}>
              <Controller>
                <div id="section-trigger" />
                <Scene
                  triggerElement="#section-trigger"
                  duration={1600}
                  triggerHook={0}
                  offset={700}
                  classToggle="background-two"
                >
                  <div
                    className="d-flex flex-column justify-content-center align-items-center stock-section-background"
                    style={{
                      height: '100vh',
                      position: 'sticky',
                      top: 0,
                    }}
                  >
                    <div>
                      <WordTitle>ACCESS</WordTitle>
                      <WordTitle>WORLD-CLASS</WordTitle>
                      <WordTitle>INVESTMENT</WordTitle>
                      <WordTitle>OPTION</WordTitle>
                    </div>
                  </div>
                </Scene>
              </Controller>
            </Col>
            <Col md={6} xs={12} style={{backgroundColor: '#006fbb'}}>
              <Controller>
                {stockSection.stocks.map(stock => {
                  const {country, countryCode, commission} = stock
                  return (
                    <Scene duration={400} pin triggerHook={0}>
                      <div
                        className="d-flex flex-column justify-content-center"
                        style={{height: '100vh'}}
                      >
                        <StockSection
                          currency={countryCode}
                          stockName={`${country} Stocks`}
                          commissionAmt={commission[0].price}
                          commissionDesc={commission[0].text}
                          interestAmt={commission[1].price}
                          interestDesc={commission[1].text}
                        />
                      </div>
                    </Scene>
                  )
                })}
              </Controller>
            </Col>
          </StockRow>
        </section>

        {/* Make Informed Decisions or 4th */}
        <section className="feature-section container-fluid d-flex justify-content-center align-items-center">
          <div className="row justify-content-around align-items-center h-100">
            <div className="col-md-3 ml-auto d-none d-md-block">
              <Controller>
                <div id="section-trigger-2" />
                <Scene
                  triggerElement="#section-trigger-2"
                  duration={1600}
                  triggerHook={0}
                  offset={700}
                  classToggle="background-two"
                >
                  <div>
                    <img
                      src={phoneFrame}
                      alt=""
                      style={{maxWidth: '250px'}}
                      className="img-fluid"
                    />
                    <img
                      src={phoneGif}
                      alt=""
                      className="img-fluid gif-phone"
                      style={{maxWidth: '235px'}}
                    />
                  </div>
                </Scene>
              </Controller>
            </div>
            {/* <div className="col-md-1" /> */}
            <div className="col-md-3 mr-auto ml-3">
              <Controller>
                <Scene duration={400} pin triggerHook={0}>
                  <Fade bottom>
                    <h1 className="text-primary display-2 mb-3">{featureSection.mainText}</h1>
                    <h5 className="mb-2">{featureSection.subText}</h5>
                    <p>{featureSection.description}</p>
                    <AniLink fade to="/how-it-works">
                      <button className="btn btn-outline-primary rounded-pill" type="button">
                        {featureSection.buttonText}
                      </button>
                    </AniLink>
                  </Fade>
                </Scene>
              </Controller>
            </div>
          </div>
        </section>

        {/* Get ahead or 5th */}
        <div className="d-flex flex-column get-ahead-section justify-content-center align-items-center bg-primary">
          <h1 className="display-3" style={{lineHeight: '0.5'}}>
            {blurb.mainText}
          </h1>
          <h3 className="big-subtitle">{blurb.subText}</h3>
        </div>
        {/* Blog Roll or 6th */}
        <div className="blog-roll-container py-3 container-fluid">
          <Fade bottom cascade>
            <div className="row">
              <div className="col-sm-8 mx-auto">
                <div className="container">
                  <BlogRoll />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* Second Feature Section or 7th */}
        <section className="row another-feature-section bg-grey row-fix">
          <div className="container">
            <div className="row justify-content-around align-items-center h-100">
              <Col md={5} lg={4} className="ml-auto">
                <Fade bottom>
                  <h1 className="text-primary display-2 mb-3">{realTimeStockSection.mainText}</h1>
                  <p>{realTimeStockSection.description}</p>
                  <AniLink fade to="/price">
                    <button className="btn btn-outline-primary rounded-pill" type="button">
                      {realTimeStockSection.buttonText}
                    </button>
                  </AniLink>
                </Fade>
              </Col>
              <Col md={6} lg={6} className="mr-auto">
                <Fade bottom cascade>
                  <Row noGutters>
                    <LiveStockCarousel stocks={realTimeStockSection.stockList} />
                  </Row>
                </Fade>
              </Col>
            </div>
          </div>
        </section>
        {/* Carousel */}
        <div className="carousel slide carousel-container" data-ride="carousel">
          <TestimonyCarousel testimonials={testimonials} />
        </div>
        {/* Download NOw */}

        <DownloadNow
          mainText={downloadNow.mainText}
          subText={downloadNow.subText}
          image={downloadNow.image}
        />
      </div>
    </>
  )
}

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{height: '100vh'}} className="d-flex justify-content-center align-items-center">
          <div className="spinner" />
        </div>
      )
    }

    const {frontmatter} = this.props.data.markdownRemark

    return (
      <Layout>
        <IndexPageTemplate
          image={frontmatter.image}
          firstSection={frontmatter.firstSection}
          stockSection={frontmatter.stockSection}
          featureSection={frontmatter.featureSection}
          blurb={frontmatter.blurb}
          realTimeStockSection={frontmatter.realTimeStockSection}
          testimonials={frontmatter.testimonials}
          downloadNow={frontmatter.downloadNow}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        firstSection {
          mainText
          description
          buttonText
          image {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        stockSection {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          stocks {
            country
            countryCode
            commission {
              price
              text
            }
          }
        }
        featureSection {
          mainText
          subText
          description
          buttonText
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gifs {
            gif
          }
        }
        blurb {
          mainText
          subText
        }
        realTimeStockSection {
          mainText
          description
          buttonText
          stockList {
            stock
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            value
            rate
            percent
            abbreviation
            bgColor
          }
        }
        testimonials {
          customerName
          customerPosition
          videoUrl
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const WordTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.75rem;

  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 2.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 4rem;
    line-height: 2.65rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
    line-height: 3.25rem;
  }
`

const StockRow = styled.div`
  display: flex;

  .section {
    height: 100vh;
  }

  .tween {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
    left: calc(50% - 50px);
  }

  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`

const Jumbotron = styled.div`
  height: 100vh !important;
  width: 100%;
  top: 0;
  position: fixed !important;
  z-index: -1;
`

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
`
