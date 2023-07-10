import React from 'react'
import externalLink from '../images/icons/externalLink.png'
import FavIcon from './FavIcon.js'
import IconWithTooltipComponent from './IconWithTooltipComponent.js'

const ExternalLink = ({ displayedUrl, url, title, subtitle }) => {
  return (
    <div className="default-button button-container">
      <a className="default-link" href={url} target="_blank" rel="noreferrer">
        <div style={{ width: '800px' }}>
          <h2 className="secondary-text external-link">{displayedUrl}</h2>
          <h2 className="primary-text">{title}</h2>
          <h2 className="secondary-text legend">{subtitle}</h2>
        </div>
      </a>
      <div>
        <a className="default-link" href={url} target="_blank" rel="noreferrer">
          <IconWithTooltipComponent placement={'top'} tooltipText={'Externer Link öffnen'} className={'fst-icon'}
                                    iconSource={externalLink} altText={'externalLinkIcon'} />
        </a>
        <FavIcon />
      </div>
    </div>
  )
}
export default ExternalLink




