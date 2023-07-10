import DefaultButton from '../components/DefaultButton'
import logo from '../images/logo2x.png'
import React from 'react'

// Startseite
export default function StartPage () {
  return (
    // https://stackoverflow.com/questions/57845109/reactjs-how-to-overlay-a-component-on-top-of-another-components-element
    <div>
      <div className="startpage-container ">
        <div>
          <img className="startpageLogo" src={logo} alt="logo" style={{ marginRight: 50 }} />
          <h1 className="primary-title">Laufbahnplanung</h1>
        </div>
      </div>
      <div className="startpagebutton-container ">
        <DefaultButton title={'Laufbahnplanung starten'} subtitle="" path="" />
        <DefaultButton title={'Auf gut Glück!'} subtitle="" path="gluecksrad" />
      </div>
      <div className="startpageBackground-container">
      </div>
    </div>
  )
}
