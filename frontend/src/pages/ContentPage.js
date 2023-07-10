import NavBar from '../components/NavBar.js'
import SiteBar from '../components/SiteBar.js'
import BreadCrumb from '../components/BreadCrumb.js'
import React, { useState } from 'react'
import { selectedPage, defaultCategory } from './LaufbahnPage.js'
import SecondLevelNaviList from '../components/SecondLevelNaviList.js'
import AccordionList from '../components/AccordionList.js'

// Innerhalb eines Hauptkapitels: 2. und 3. Navigationsebene, Inhalt
const ContentPage = () => {
  const [category, setCategory] = useState(defaultCategory)

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory)
  }

  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        <BreadCrumb activeCrumb={selectedPage.attributes.title} />
        <div className="second-level-navi">
          <SecondLevelNaviList defaultValue={defaultCategory} allCategories={selectedPage.attributes.categories.data}
                               handleSelectCategory={handleSelectCategory} />
        </div>
        <AccordionList allSubcategories={category.attributes.subcategories.data} />
      </div>
    </div>
  )
}

export default ContentPage