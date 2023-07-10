import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const IconWithTooltipComponent = ({ placement, tooltipText, className, iconSource, altText }) => {

  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip bsPrefix="tooltipStyle">
          <p>{tooltipText}</p>
        </Tooltip>
      }
    >
      <img className={className} src={iconSource} alt={altText} style={{ cursor: 'pointer' }} />
    </OverlayTrigger>
  )
}

export default IconWithTooltipComponent
