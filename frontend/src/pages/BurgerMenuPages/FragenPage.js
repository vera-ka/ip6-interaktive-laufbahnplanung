import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'
import { Accordion } from 'react-bootstrap'
import PdfLink from '../../components/PdfLink.js'
import InternalLink from '../../components/InternalLink'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionBody from 'react-bootstrap/AccordionBody'
import ExternalLink from '../../components/ExternalLink'

// Häufige Fragen
export default function FragenPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        <h1 className="primary-text">Häufige Fragen</h1>
        <Accordion style={{ paddingTop: 100 }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mein Laufbahnziel ist es...</Accordion.Header>
            <Accordion.Body>
              <InternalLink
                url={''}
                title={'... beim Arbeitgeber bleiben und meine Stelle behalten'}
              />
              <InternalLink
                url={''}
                title={'... beim Arbeitgeber bleiben und intern aufsteigen'}
              />
              <InternalLink
                url={''}
                title={'... andern Arbeitgeber und Stelle wechseln'}
              />
              <InternalLink
                url={''}
                title={'... Stelle wechseln und bei anderem Arbeitgeber aufsteigen'}
              />
              <InternalLink
                url={''}
                title={'... Stelle wechseln und bei anderem Arbeitgeber aufsteigen'}
              />
              <InternalLink
                url={''}
                title={'... nach Pause in Arbeitsmarkt wieder einsteigen'}
              />
              <InternalLink
                url={''}
                title={'... andern Beruf ausüben und mich neu orientieren'}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="1">
            <Accordion.Header>Wie sieht der Arbeitsmarkt aus? </Accordion.Header>
            <AccordionBody>
              <InternalLink
                url={''}
                title={'Arbeitsmarkt'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="2">
            <Accordion.Header>Wie werde ich Lehrer*in? </Accordion.Header>
            <AccordionBody>
              <InternalLink
                url={''}
                title={'Lehramt'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="3">
            <Accordion.Header>Wie soll ich vorgehen bei der Laufbahnplanung? </Accordion.Header>
            <AccordionBody>
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/8443'}
                title={'Schritte der Laufbahnplanung'}
                subtitle={'Klärung der eigenen Voraussetzungen'}
              />
              <InternalLink
                url={'/schritte-der-laufbahnplanung'}
                title={'5 Schritte der Laufbahnplanung'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="4">
            <Accordion.Header>Wie mache ich mich selbständig? </Accordion.Header>
            <AccordionBody>
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/2886?id=37404'}
                title={'Ich mache mich selbständig'}
                subtitle={'Kurszertifikat / Kursbestätigung Klubschule Migros Basel'}
              />
              <PdfLink
                url={''}
                title={'SDBB Sich selbständig machen'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="5">
            <Accordion.Header>FAQ Berufsberatung </Accordion.Header>
            <AccordionBody>
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/13209'}
                title={'Fragen - Antworten FAQ'}
                subtitle={'113 Fragen und Antworten'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <Accordion>
          <AccordionItem eventKey="6">
            <Accordion.Header>Stellensuche / Bewerbung</Accordion.Header>
            <AccordionBody>
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/8882'}
                title={'Stellensuche'}
                subtitle={'Hilfestellungen zur Stellensuche'}
              />
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/8921'}
                title={'Stellenmarkt'}
                subtitle={'Offener und verdeckter Stellenmarkt'}
              />
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/22269'}
                title={'Bewerbungsdossier'}
                subtitle={'Motivationsschreiben, Lebenslauf, Arbeitszeugnisse und Referenzen'}
              />
              <ExternalLink
                displayedUrl={'be-werbung.ch'}
                url={'https://be-werbung.ch/bewerbung/umsetzung/be-werbung/be-werbung-grundsaetzliches.html'}
                title={'Bewerbung'}
                subtitle={'Grundsätzliches zur Bewerbung'}
              />
              <ExternalLink
                displayedUrl={'berufsberatung.ch'}
                url={'https://www.berufsberatung.ch/dyn/show/22364'}
                title={'Vorstellungsgespräch'}
                subtitle={'Tipps und Tricks fürs Vorstellungsgespräch'}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
