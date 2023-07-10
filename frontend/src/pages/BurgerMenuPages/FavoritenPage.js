import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'
import ExternalLink from '../../components/ExternalLink'
import PdfLink from '../../components/PdfLink.js'
import download from '../../images/icons/download.png'
import mail from '../../images/icons/mail.png'

// Favoritenliste
export default function FavoritenPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        <h1 style={{ display: 'block' }} className="primary-text">Favoritenliste</h1>
        <h2 style={{ display: 'inline', paddingRight: 20 }} className="secondary-text legend">Per Email verschicken</h2>
        <img style={{ width: 30 }} src={mail} alt="mail-icon" />
        <h2 style={{ display: 'inline', paddingLeft: 30, paddingRight: 20 }}
            className="secondary-text legend">Download</h2>
        <img style={{ width: 50 }} src={download} alt="download-icon" />
        <ExternalLink displayedUrl="laufbahn.berufsberatung.ch"
                      url="https://laufbahn.berufsberatung.ch/informationsquellen/arbeit-beschaeftigung/arbeitsmarkt"
                      title="Arbeitsmarkt" subtitle="Aktuelle Situation und zukünftige Entwicklung" />
        <PdfLink title="Chancenheft Begleitung, Betreuung, Therapie" subtitle="Weiterbildung und Laufbahn" />
        <PdfLink title="Soziale Berufe" subtitle="Berufe, Funktionen, Aus- und Weiterbildungen" />

      </div>
    </div>
  )
}
