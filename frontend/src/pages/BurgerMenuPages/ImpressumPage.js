import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'

// Impressum
export default function ImpressumPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        <h1 className="primary-text">Impressum</h1>
        <h2 className="secondary-text" style={{ paddingTop: 100 }}>
          ask! – Beratungsdienste für Ausbildung und Beruf <br />
          Herzogstrasse 1<br />
          5000 Aarau
        </h2>
      </div>
    </div>
  )
}