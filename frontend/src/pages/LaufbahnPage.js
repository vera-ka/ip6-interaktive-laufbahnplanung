import React from 'react'

import DefaultButton from '../components/DefaultButton'
import NavBar from '../components/NavBar'
import SiteBar from '../components/SiteBar'
import { gql, useQuery } from '@apollo/client'

const getContent = gql`
query GetAllContent {
    pages(sort:"order") {
      data {
        attributes {
          title
          subtitle
          path
          categories(sort:"order") {
            data {
              attributes {
                title
                subcategories(sort:"order") {
                  data {
                    attributes {
                      title
                      texts {
                        data {
                          attributes {
                            title
                            textBody
                          }
                        }
                      }
                      external_links {
                        data {
                          attributes {
                            displayedURL
                            externalURL
                            title
                            subtitle
                          }
                        }
                      }
                      pdf_links(sort:"order") {
                        data {
                          attributes {
                            title
                            subtitle
                            downloadURL
                          }
                        }
                      }
                      internal_links {
                        data {
                          attributes {
                            title
                            subtitle
                            internalURL
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `

export let selectedPage
export let defaultCategory
export let handleSelectPage = {}

// Hauptkapitel-Übersicht: 1. Navigationsebene
const LaufbahnPage = () => {

  const { loading, error, data } = useQuery(getContent)
  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>Error :(</p>)

  handleSelectPage = (page) => {
    selectedPage = page
    defaultCategory = selectedPage.attributes.categories.data[0]
  }

  return (
    <div>
      <NavBar />
      <SiteBar />
      <div className={'second-layer'}>
        {data.pages && data.pages.data.map((page) => (
          <DefaultButton
            onSelection={handleSelectPage}
            title={page.attributes.title}
            subtitle={page.attributes.subtitle}
            path="contentPage"
            page={page}
          />
        ))}
      </div>
    </div>
  )
}

export default LaufbahnPage


