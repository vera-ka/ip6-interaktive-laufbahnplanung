import NavBar from '../../components/NavBar'
import SiteBar from '../../components/SiteBar'
import React from 'react'
import FortuneWheelSketch from '../../p5-sketches/FortuneWheelSketch'

// Berufs-Glücksrad
export default function GluecksradPage () {
  return (
    <div>
      <NavBar />
      <SiteBar />
      <FortuneWheelSketch />
    </div>
  )
}
