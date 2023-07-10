import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import dropUnfilled from '../images/icons/drop_unfilled.png'
import dropFilled from '../images/icons/drop_filled.png'

const FavIcon = () => {
  const [imageSrc, setImageSrc] = React.useState(dropUnfilled)

  // only changes between unfilled and filled "Drop"-Icon; no addition of filled content type to favourites
  const addToFavorites = () => {
    if (imageSrc === dropUnfilled) {
      setImageSrc(dropFilled)
    } else {
      setImageSrc(dropUnfilled)
    }
  }

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip bsPrefix="tooltipStyle">
          <p>Zu Favoriten hinzufügen</p>
        </Tooltip>
      }
    >
      <img className="fst-icon" src={imageSrc.toString()} alt="dropIcon" onClick={addToFavorites}
           style={{ cursor: 'pointer' }} />
    </OverlayTrigger>
  )
}

export default FavIcon
