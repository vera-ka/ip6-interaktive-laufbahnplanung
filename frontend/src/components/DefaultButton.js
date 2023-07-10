import React from 'react'
import arrow from '../images/icons/arrow.png'
import { Link } from 'react-router-dom'

const DefaultButton = ({ onSelection, title, subtitle, path, page }) => (
  <Link className="default-link" to={`/laufbahnplanung/${path}`}>
    <div className="startpage-button button-container" onClick={() => {onSelection(page)}}>
      <div>
        <h2 className="secondary-text">{subtitle}</h2>
        <h2 className="primary-text">{title}</h2>
      </div>
      <div>
        <img className="fst-icon" src={arrow} alt="arrowicon" />
      </div>
    </div>
  </Link>
)

export default DefaultButton
