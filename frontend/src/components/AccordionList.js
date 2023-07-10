import React from 'react'
import AccordionItem from './AccordionItem.js'
import { Accordion } from 'react-bootstrap'

export default function AccordionList ({ allSubcategories }) {
  return (
    <div>
      <Accordion defaultActiveKey="Übersicht">
        {allSubcategories.map((subcategory) => (
          <AccordionItem subcategory={subcategory} />
        ))}
      </Accordion>
    </div>
  )
}
