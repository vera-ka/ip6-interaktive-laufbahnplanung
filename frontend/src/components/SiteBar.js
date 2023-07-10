import React from 'react'
import beratung from '../images/icons/beratung.png'
import call from '../images/icons/call.png'
import chat from '../images/icons/chat.png'
import IconWithTooltipComponent from './IconWithTooltipComponent.js'

// Kontaktaufnahme mit ask! via Chat, MSTeams-Call und Beratungsangebote
export default function SiteBar () {
  return (
    <div className="site-bar-container">
      <div className="site-bar-container-item">
        <IconWithTooltipComponent placement={'right'} tooltipText={'Mit ask! chatten'} className={''} iconSource={chat}
                                  altText={'Chat'} />
        <p>Chat</p>
      </div>
      <div className="site-bar-container-item">
        <IconWithTooltipComponent placement={'right'} tooltipText={'ask! anrufen via MSTeams'} className={''}
                                  iconSource={call}
                                  altText={'Call'} />
        <p>MSTeams-Call</p>
      </div>
      <div className="site-bar-container-item">
        <IconWithTooltipComponent placement={'right'} tooltipText={'ask! Beratungsangebote'} className={''}
                                  iconSource={beratung} altText={'Beratung'} />
        <p>Beratung</p>
      </div>
    </div>
  )
}