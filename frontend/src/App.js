import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// page & layout imports
import LaufbahnPage from './pages/LaufbahnPage'
import StartPage from './pages/StartPage'
import ContentPage from './pages/ContentPage.js'
import GluecksradPage from './pages/BurgerMenuPages/GluecksradPage.js'
import SchritteLaufbahnplanungPage from './pages/BurgerMenuPages/SchritteLaufbahnplanungPage.js'
import FavoritenPage from './pages/BurgerMenuPages/FavoritenPage.js'
import LinksPage from './pages/BurgerMenuPages/LinksPage'
import FragenPage from './pages/BurgerMenuPages/FragenPage'
import ImpressumPage from './pages/BurgerMenuPages/ImpressumPage'

// apollo client: state management library for JS enabling the management of both local and remote data with GraphQL.
// https://www.apollographql.com/docs/react/
const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

let rootPath = '/laufbahnplanung'

function App () {
  return (
    <div className="root">
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Routes>
              <Route path="/"
                     element={<StartPage />} />
              <Route path={rootPath}
                     element={<LaufbahnPage />} />
              <Route
                path={`${rootPath}/gluecksrad`}
                element={<GluecksradPage />} />
              <Route
                path={`${rootPath}/contentPage`}
                element={<ContentPage />}
              />
              <Route
                path={`/schritte-der-laufbahnplanung`}
                element={<SchritteLaufbahnplanungPage />}
              />
              <Route
                path={`/favoritenliste`}
                element={<FavoritenPage />}
              />
              <Route
                path={`/weiterfuehrende-links`}
                element={<LinksPage />}
              />
              <Route
                path={`/haeufige-fragen`}
                element={<FragenPage />}
              />
              <Route
                path={`/impressum`}
                element={<ImpressumPage />}
              />
            </Routes>
          </div>
        </ApolloProvider>
      </Router>
    </div>
  )
}

export default App
