import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import {Container, Row, Col, UncontrolledTooltip} from 'reactstrap'
import {Link} from 'gatsby'

import logo from '../../../static/img/logo.png'
import facebookIcon from '../../../static/img/facebook_blue.png'
import linkedinIcon from '../../../static/img/linkedin_blue.png'
import twitterIcon from '../../../static/img/twitter_blue.png'
import wechatIcon from '../../../static/img/wechat_blue.png'
import qrCode from '../../img/wechat-english.jpg'

function Footer() {
  return (
    <StyledFooter id="footer" className="">
      <StyledContainer className="justify-content-between d-flex flex-column py-5">
        <Row className="w-100 justify-content-between my-3">
          <Col md={6}>
            <Row>
              <Col md={4} className="mb-3">
                <div>
                  <img src={logo} alt="" style={{maxHeight: '50px', maxWidth: '125px'}} />
                </div>
              </Col>
              <Col xs={4}>
                <AniLink fade to="/about" className="text-dark">
                  <p className="mb-1">About</p>
                </AniLink>
                <AniLink fade to="/how-it-works" className="text-dark">
                  <p className="mb-1">How it works</p>
                </AniLink>
                <AniLink fade to="/prices" className="text-dark">
                  <p className="mb-1">Prices</p>
                </AniLink>
                <a href="https://www.snowballsecurities.com/download" className="text-dark">
                  <p className="mb-1">Downloads</p>
                </a>
              </Col>
              <Col xs={4}>
                <p className="mb-1">Blog</p>
                <p className="mb-1">Risk Disclosure</p>
                <AniLink fade to="/faq" className="text-dark">
                  <p className="mb-1">FAQs</p>
                </AniLink>
                <AniLink fade to="/contact" className="text-dark">
                  <p className="mb-1">Contact</p>
                </AniLink>
              </Col>
            </Row>
          </Col>

          <Col md={4}>{/* <h2>Hellew</h2> */}</Col>
        </Row>

        <Row className="my-3">
          <Col md={4} sm={12} className="ml-auto">
            <Row className="w-100">
              <Col className="text-right">
                <UncontrolledTooltip
                  placement="top"
                  target="weChatIcon"
                  style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}
                >
                  <img
                    src={qrCode}
                    alt="qr"
                    style={{height: '100px', width: '100px'}}
                    className="m-0"
                  />
                </UncontrolledTooltip>
                <img
                  src={wechatIcon}
                  alt=""
                  style={{maxHeight: '30px', maxWidth: '30px'}}
                  id="weChatIcon"
                  className="mr-4"
                />
                <a href="https://www.facebook.com/snowballsecurities" target="_blank">
                  <img
                    id="fbIcon"
                    src={facebookIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    className="mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/company/snowballsecurities" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    className="mr-4"
                    id="linkedInIcon"
                  />
                </a>

                <a href="https://twitter.com/snowballsec?lang=en" target="_blank">
                  <img
                    src={twitterIcon}
                    alt=""
                    style={{maxHeight: '30px', maxWidth: '30px'}}
                    id="twitterIcon"
                  />
                </a>
              </Col>
            </Row>
            <Row className="justify-content-end mt-3 w-100">
              <Col md={12} className="ml-auto text-right">
                <small className="mr-3" style={{fontSize: '10px', textDecoration: 'underline'}}>
                  Privacy Policy
                </small>
                <small style={{fontSize: '10px', textDecoration: 'underline'}}>
                  Terms and Conditions
                </small>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={9} className="mb-3" style={{lineHeight: 1}}>
            <StyledSmall>
              Snowball Securities®, 雪盈证券® are New Zealand registered trademarks of SNB Finance
              Holdings Limited (NZBN: 9429046386212) (&quot;SNB&quot;).
            </StyledSmall>
            <br />
            <StyledSmall>
              SNB is registered on the New Zealand Financial Service Providers Register
              (FSP:594389). SNB’s Financial Service Providers registration can be verified on the
              Financial Service Providers Register. SNB is a member of the Financial Dispute
              Resolution Scheme, which is an independent dispute resolution scheme. New Zealand.
              SNB’s registered office is at Level 5, 25 Teed Street, Newmarket, Auckland 1023, New
              Zealand.
            </StyledSmall>
            <br />
            <StyledSmall />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Trademark>© 2019 Snowball Securities</Trademark>
          </Col>
        </Row>
      </StyledContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  min-height: 40vh;
  background-color: #f5f5f5;
  position: fixed;
  height: 385px;
  bottom: 0;
  width: 100%;
  z-index: -2;
`

const StyledContainer = styled(Container)`
  line-height: 1.1;
  padding: 50px 1rem !important;
  /* max-width: 90% !important; */
`

const StyledSmall = styled.small`
  line-height: 0.8;
  color: rgba(0, 0, 0, 0.8);
  font-size: 10px;
`

const Trademark = styled.small`
  font-size: 8px;
  color: #aaa;
`

export default Footer
