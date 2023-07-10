import React from 'react'
import pdf from '../images/icons/pdf.png'
import FavIcon from './FavIcon.js'
import IconWithTooltipComponent from './IconWithTooltipComponent.js'

const PdfLink = ({ url, title, subtitle }) => {
  return (
    <div className="pdf-button button-container">
      <a className="default-link" href={url} target="_blank" rel="noreferrer">
        <div>
          <h2 className="primary-text">{title}</h2>
          <h2 className="secondary-text legend">{subtitle}</h2>
        </div>
      </a>
      <div>
        <a className="default-link" href={url} target="_blank" rel="noreferrer">
          <IconWithTooltipComponent placement={'top'} tooltipText={'PDF öffnen'} className={'fst-icon'} iconSource={pdf}
                                    altText={'pdfIcon'} />
        </a>
        <FavIcon />
      </div>
    </div>
  )
}

export default PdfLink
