import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'
import ExternalLink from '../../components/ExternalLink'

// Weiterführende Links
export default function LinksPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className="second-layer">
        <h1 className="primary-text">Weiterführende Links</h1>
        <ExternalLink displayedUrl="beratungsdienste.ch" url="https://www.beratungsdienste.ch" />
        <ExternalLink displayedUrl="berufsberatung.ch" url="https://www.berufsberatung.ch" />
        <ExternalLink displayedUrl="laufbahn.berufsberatung.ch" url="https://laufbahn.berufsberatung.ch" />
        <ExternalLink displayedUrl="viamia.ch" url="https://viamia.ch" />
        <ExternalLink displayedUrl="berufsbildungplus.ch" url="https://www.berufsbildungplus.ch" />
      </div>
    </div>
  )
}
