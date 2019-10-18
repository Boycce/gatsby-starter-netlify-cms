import React from 'react'
import PropTypes from 'prop-types'

import {IndexPageTemplate} from '../../templates/index-page'

const IndexPagePreview = ({entry, getAsset}) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data)

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        firstSection={data.firstSection}
        stockSection={{
          title: data.stockSection.title,
          backgroundImage: data.stockSection.backgroundImage,
          stocks: data.stockSection.stocks || [],
        }}
        featureSection={data.featureSection}
        blurb={data.blurb}
        realTimeStockSection={data.realTimeStockSection}
        testimonials={data.testimonials || []}
      />
    )
  }
  return <div>Loading...</div>
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
