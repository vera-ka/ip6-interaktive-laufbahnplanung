import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'
import ExternalLink from '../../components/ExternalLink.js'
import Text from '../../components/Text.js'
import InternalLink from '../../components/InternalLink.js'
import PdfLink from '../../components/PdfLink.js'
import image from '../../images/woman.png'

// 5 Schritte der Laufbahnplanung
export default function SchritteLaufbahnplanungPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        <h1 className="primary-text">5 Schritte der Laufbahnplanung</h1>
        <div style={{ paddingTop: 70, display: 'flex', justifyContent: 'center' }}>
          <img src={image} />
        </div>
        <div style={{ paddingTop: 16 }}>
          <h1 className="primary-text">Schritt 1: </h1>
          <h1 className="secondary-text">Ich kenne meine Interessen und Kompetenzen </h1>
          <ExternalLink displayedUrl={'laufbahn.berufsberatung.ch'}
                        url={'https://laufbahn.berufsberatung.ch/frageboegen'} title={'Fragebögen'}
                        subtitle={'Was können Sie gut? Was motiviert Sie?'} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <h1 className="primary-text">Schritt 2: </h1>
          <h1 className="secondary-text">Ich kläre meine Einstellungen, Werte und Ziele</h1>
          <ExternalLink displayedUrl={'laufbahn.berufsberatung.ch'} url={'https://laufbahn.berufsberatung.ch'}
                        title={'Ziele'} subtitle={'Was ist ihr Ziel?'} />
          <Text title={'Zu beantwortende Fragen'} text={
            'Wie viel Gewicht messe ich meiner beruflichen Karriere bei? \n' +
            'Wie wichtig sind mir ein gutes Einkommen und berufliches Prestige neben der Familie und anderen Vorhaben? \n' +
            'Welche persönlichen Werte und Ziele sind für mich zentral und wo will ich in nächster Zukunft Akzente setzen? \n' +
            'Welche Lebensziele verfolge ich? Bestimmte Ziele lassen sich auch ausserhalb der Berufstätigkeit verwirklichen. Freiwilligenarbeit ist eine gute Möglichkeit, verschiedene Interessen zusammenzuführen oder neue Kompetenzen zu erwerben. Mehr zur Freiwilligenarbeit: benevol.ch\n'} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <h1 className="primary-text">Schritt 3: </h1>
          <h1 className="secondary-text">Ich verbinde persönliche und berufliche Ziele</h1>
          <InternalLink title={'Inspiration'} subtitle={'Berufsportraits, Beruf finden, Berufsglücksrad'} />
          <Text title={'Zu beantwortende Fragen'}
                text={'Zu beantwortende Fragen: Die Laufbahnplanung beschäftigt sich nicht nur mit Fragen zum Beruf, sondern auch mit Fragen zu anderen Lebensbereichen: \n' +
                  'Wie verbinde ich meine Karrierewünsche mit Freizeitaktivitäten oder familiären Verpflichtungen? \n' +
                  'Ist in meinem Beruf Teilzeitarbeit möglich? Ist ein zeitweiser Ausstieg aus dem Beruf denkbar – und ist der Wiedereinstieg realisierbar? \n' +
                  '\n' + 'Familienarbeit und Berufstätigkeit erfordern viel Koordinations-aufwand. Weitere Laufbahnschritte sind also frühzeitig einzuplanen. \n' +
                  'Weitere Informationen: Eidgenössisches Büro für die Gleichstellung von Frau und Mann, www.ebg.admin.ch\n'} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <h1 className="primary-text">Schritt 4: </h1>
          <h1 className="secondary-text">Ich informiere mich über Weiterbildungs- und Berufsangebote</h1>
          <InternalLink title={'Weiterbildung'} subtitle={'Nach Beruf, Bildungssystem, Finanzierung'} />
          <InternalLink title={'Berufliche Neuorientierung'} subtitle={'Gewünschter Beruf, KV - Was nun?, Dokumente'} />
          <InternalLink title={'Was sind meine Möglichkeiten?'}
                        subtitle={'Anhand von Beruf, Ausbildung, Fähigkeiten, Zielen'} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <h1 className="primary-text">Schritt 5: </h1>
          <h1 className="secondary-text">Ich realisiere eine Weiterbildung oder einen Berufswechsel</h1>
          <Text
            text={'Eine längere Weiterbildung zu beginnen oder den Beruf zu wechseln, verlangt frühzeitiges Vorbereiten. Die Realisierungsphase nimmt oft mehrere Monate in Anspruch. Dabei sind folgende Punkte zu beachten:\n' +
              'Kosten: Nicht nur Schulgeld, sondern auch Lohnausfall müssen einberechnet werden. Bei Bedarf sind möglichst früh Reserven anzulegen.\n' +
              'Zeit: Muss das Arbeitspensum längerfristig reduziert werden? Ist eine Kündigung der Arbeitsstelle nötig? Muss allenfalls eine Kinderbetreuung organisiert werden?\n' +
              'Anforderungen: Bei gewissen Weiterbildungen muss ein Aufnahmeverfahren durchlaufen werden (z.B. Vorpraktika, Prüfungen).\n' +
              'WartelistenEs gibt Weiterbildungsinstitutionen, die längere Anmeldefristen und Wartelisten von Interessentinnen und Interessenten haben.\n' +
              'Freiwilligenarbeit kann die Weiterbildung oder den Berufswechsel unterstützen. Sie bietet Gelegenheit, berufliche Kompetenzen zu erwerben oder zu vertiefen.\n'} />
          <PdfLink title={'KI Stipendien und Darlehen'} />
          <PdfLink title={'KI Finanzierung von Weiterbildungen'} />
          <ExternalLink displayedUrl={'ag.ch/stipdendien'}
                        url={'https://www.ag.ch/de/verwaltung/bks/hochschulen/stipendien'}
                        title={'Stipendien Kanton Aargau'} subtitle={'Ausbildungsbeiträge im Kanton Aargau'} />
          <ExternalLink displayedUrl={'stipdendium.ch'} url={'https://www.stipendium.ch'} title={'Stipendien Schweiz'}
                        subtitle={'Stipendien-Möglichkeiten prüfen'} />
          <ExternalLink displayedUrl={'stiftungraphael.ch'} url={'https://stiftungraphael.ch'}
                        title={'Stiftung Raphael'} subtitle={'Persönliche Beratung und finanzielle Unterstützung'} />
          <ExternalLink displayedUrl={'willy-mueller-foerderstiftung.ch'}
                        url={'https://www.willy-mueller-foerderstiftung.ch'} title={'Stiftung Willy Müller '}
                        subtitle={'Förderbeiträge für laufende oder zukünftige Projekte und Ausbildungen'} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <h1 className="secondary-text">Siehe auch:</h1>
          <ExternalLink displayedUrl={'berufsberatung.ch'} url={'https://www.berufsberatung.ch/dyn/show/8443'}
                        title={'Schritte der Laufbahnplanung'} />
        </div>
      </div>
    </div>
  )
}
