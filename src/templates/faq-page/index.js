/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import {Collapse} from 'reactstrap'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'
import arrowRight from '../../img/arrow-right-blue.png'
import './styles.scss'

type FaqPageTemplateProps = {
  headerImage: any,
  categories: Array<{
    categoryTitle: string,
    questions: Array<{question: string, answer: string}>,
  }>,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

const Accordion = ({ndx, cc}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="accordion py-2" key={ndx}>
      <button
        onClick={toggle}
        type="button"
        className="w-100 p-0 text-left"
        style={{backgroundColor: 'transparent', border: 'none'}}
      >
        <div className="d-flex justify-content-between px-3">
          <h5 className="mb-2">{cc.question}</h5>
          <Arrow src={arrowRight} alt="" active={isOpen} />
        </div>
        <Collapse toggler={`#toggler${ndx}`} className="mx-3" isOpen={isOpen}>
          <p className="mb-0 text-dark">{cc.answer}</p>
        </Collapse>
      </button>
    </div>
  )
}

export function FaqPageTemplate(props: FaqPageTemplateProps) {
  const [currentNdx, setNdx] = useState(0)

  return (
    <div className="faq-page">
      <SharedJumbotron headerImage={props.headerImage} title="FAQS" description="Answered" />
      <div className="container pt-5 mb-5">
        <div className="row mx-auto">
          <div className="col-md-8 mx-auto">
            <ul className="nav nav-pills row justify-content-around">
              {props.categories.map((category, ndx) => (
                <li
                  key={ndx}
                  className="nav-item"
                  onClick={() => {
                    setNdx(ndx)
                  }}
                >
                  <a className={`nav-link ${ndx === currentNdx ? 'active' : ''}`}>
                    {category.categoryTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row">
          <div className="col-md-9 mx-auto">
            {props.categories[currentNdx].questions.map((cc, ndx) => (
              <Accordion ndx={ndx} cc={cc} key={`${cc.question}${ndx}`} />
            ))}
          </div>
        </div>
      </div>

      <DownloadNow {...props.downloadNow} />
    </div>
  )
}

type Props = {
  data: {
    markdownRemark: {
      frontmatter: FaqPageTemplateProps,
    },
  },
}

function FaqPage({data}: Props) {
  const {markdownRemark: faq} = data

  console.log(faq)

  return (
    <Layout white>
      <FaqPageTemplate
        headerImage={faq.frontmatter.headerImage}
        categories={faq.frontmatter.categories}
        downloadNow={faq.frontmatter.downloadNow}
      />
    </Layout>
  )
}

export default FaqPage

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        categories {
          categoryTitle
          questions {
            question
            answer
          }
        }
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Arrow = styled.img`
  height: 20px;
  transform: ${props => (!props.active ? 'rotate(180deg)' : 'rotate(90deg)')};
  transistion: 0.2s ease-in;
`
