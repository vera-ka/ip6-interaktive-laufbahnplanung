import React from 'react'
import Nav from 'react-bootstrap/Nav'
import SecondLevelNavLink from './SecondLevelNavLink.js'

// 2. Navigationsebene: Bulletpoint-Liste links
export default function SecondLevelNaviList ({ defaultValue, allCategories, handleSelectCategory }) {
  return (
    <div>
      <Nav defaultActiveKey={defaultValue.attributes.title} className="flex-column">
        {allCategories.map((category) => (
          <SecondLevelNavLink category={category} onSelect={handleSelectCategory} />
        ))}
      </Nav>
    </div>
  )
}



