import PdfLink from './PdfLink.js'
import React from 'react'
import ExternalLink from './ExternalLink.js'
import Text from './Text.js'
import InternalLink from './InternalLink.js'
import { Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function AccordionItem ({ subcategory }) {
  return (
    <div>
      <Accordion.Item eventKey={subcategory.attributes.title}>
        <Accordion.Header>
          {subcategory.attributes.title}
        </Accordion.Header>
        <Accordion.Body>
          {subcategory.attributes.texts.data.map((text) => (
            <Text
              title={text.attributes.title}
              text={text.attributes.textBody}
            />
          ))}
          {subcategory.attributes.external_links.data.map((externalLink) => (
            <ExternalLink
              displayedUrl={externalLink.attributes.displayedURL}
              url={externalLink.attributes.externalURL}
              title={externalLink.attributes.title}
              subtitle={externalLink.attributes.subtitle}
            />
          ))}
          {subcategory.attributes.pdf_links.data.map((pdf) => (
            <PdfLink
              url={pdf.attributes.downloadURL}
              title={pdf.attributes.title}
              subtitle={pdf.attributes.subtitle}
            />
          ))}
          {subcategory.attributes.internal_links.data.map((internalLink) => (
            <InternalLink
              url={internalLink.attributes.internalURL}
              title={internalLink.attributes.title}
              subtitle={internalLink.attributes.subtitle}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}


