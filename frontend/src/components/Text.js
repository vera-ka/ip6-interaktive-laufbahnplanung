import React from 'react'
import ReactMarkdown from 'react-markdown'
import FavIcon from './FavIcon.js'

const Text = ({ title, text }) => {
  return (
    <div className="text-button ">
      <div className="button-container">
        <div>
          <h2 className="primary-text">{title}</h2>
        </div>
        <FavIcon />
      </div>
      <br></br>
      {/*https://forum.strapi.io/t/line-breaks-in-strapi/5225/3*/}
      <div className="legend">
        <ReactMarkdown children={text.replace(/\n/gi, '&nbsp; \n')} />
      </div>
    </div>
  )
}

export default Text
