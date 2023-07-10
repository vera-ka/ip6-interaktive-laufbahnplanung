import React from 'react'
import internalLink from '../images/icons/internalLink.png'
import FavIcon from './FavIcon.js'
import IconWithTooltipComponent from './IconWithTooltipComponent.js'

const InternalLink = ({ url, title, subtitle }) => {
  return (
    <div className="default-button button-container">
      <a className="default-link" href={url} rel="noreferrer">
        <h2 className="primary-text">{title}</h2>
        <h2 className="secondary-text legend">{subtitle}</h2>
      </a>
      <div>
        <a className="default-link" href={url} rel="noreferrer">
          <IconWithTooltipComponent placement={'top'} tooltipText={'Interner Link öffnen'} className={'fst-icon'}
                                    iconSource={internalLink} altText={'internalLinkIcon'} />
        </a>
        <FavIcon />
      </div>
    </div>
  )
}

export default InternalLink
