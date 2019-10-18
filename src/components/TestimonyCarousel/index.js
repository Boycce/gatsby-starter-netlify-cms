/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {Carousel, CarouselItem, CarouselControl, Modal, ModalBody} from 'reactstrap'

import playButton from '../../../static/img/play_button.svg'
import testimonialImage from '../../../static/img/smile-face-7.jpg'
import testimonialImage2 from '../../../static/img/smile-face-8.jpg'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const items = [
  {
    src: testimonialImage,
  },
  {
    src: testimonialImage2,
  },
]

type Props = {
  testimonials: Array<{
    customerName: string,
    customerPosition: string,
    backgroundImage: string,
    videoUrl: string,
  }>,
}

const TestimonyCarousel = ({testimonials}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = testimonials.map(testimonial => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={testimonial.customerName}
    >
      <PreviewCompatibleImage
        imageInfo={testimonial.backgroundImage}
        style={{width: '100%', position: 'absolute'}}
      />

      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-md-2" />
        <div className="col-md-5 mr-auto">
          <h1 className="display-2 mb-3">WHAT OUR CUSTOMERS ARE SAYING</h1>
          <h3 className="big-subtitle" style={{fontSize: '72px', color: 'black'}}>
            {testimonial.customerName}
          </h3>
          <h5 className="text-white" style={{textTransform: 'uppercase'}}>
            {testimonial.customerPosition}
          </h5>
          <div
            className="border border-white rounded-circle d-flex justify-content-center align-items-center"
            style={{height: '65px', width: '65px'}}
            onClick={() => {
              setModal(true)
            }}
          >
            <img src={playButton} alt="Play Button" className="img-fluid" />
          </div>
        </div>
      </div>
    </CarouselItem>
  ))

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      {/* Modal Video */}
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalBody>
          <h1>hello</h1>
        </ModalBody>
      </Modal>
    </>
  )
}

export default TestimonyCarousel