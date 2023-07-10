import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function SecondLevelNavLink ({ category, onSelect }) {

  const handleSelect = (e) => {
    e.preventDefault()
    return onSelect(category)
  }

  return (
    <div>
      <Nav.Item>
        <Nav.Link eventKey={category.attributes.title} className={'nav-link unfilled'} onClick={handleSelect}>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="14" stroke="black" strokeWidth="1.5" />
          </svg>
          {category.attributes.title}
        </Nav.Link>
      </Nav.Item>
    </div>
  )
}
