# IP6 Interaktive Laufbahnplanung
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm install`

Downloads a package and its dependencies
<br/>
<br/>
## Zu beachten im IP6-Bericht:

### Kapitel 4: 
- Tabelle 25 "Namensgebung Navigationsebenen und Inhaltstypen"
- 4.2 Software Architektur
- 4.3 Frontend
- 4.4 Datenbank-Schema Backend
- 4.5 Deployment
- 4.6 Technische Herausforderungen & Innovative Lösungen
<br/>
<br/>
## Frontend:
- `setupProxy.js-File:` für die lokale Entwicklung: <em>target:</em> 'http://localhost:1337', fürs Deployment: <em>target:</em> 'http://86.119.36.46:1337'.
- Alle Images und Icons befinden sich im Ordner «images».
- Der Inhalt der Features-Seiten ist "hard-codiert" im Frontend und wird noch nicht vom CMS her bezogen.
- Die `Favoritenliste` und die `SiteBar` mit Chat, MSTeams-Call und Beratung ist nicht funktional.
  <br/>
  <br/>
## Backend:
PDFs:
- Die Chancen-Hefte des SDBB-Verlags wurden der Subcategory «Beruf nach Branchen» zugeordnet mit dem Subtitle «Weiterbildung und Laufbahn», die Berufe/Funktionen-Hefte des SDBB-Verlags wurden der Subcategory «Beruf nach Berufsfeldern» zugeordnet mit dem Subtitle «Berufe, Funktionen, Aus- und Weiterbildungen».
- <em>Im CMS lokal abgelegte PDFs:</em> anstelle der jeweiligen Kurzinfo von ask! wurde KI_Dummy.pdf abgelegt, für die weiteren Informationsmaterialien wurde WeiteresInfomaterial.pdf verwendet.

