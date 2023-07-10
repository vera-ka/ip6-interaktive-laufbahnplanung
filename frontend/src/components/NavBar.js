import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../images/logo.png'
import React from 'react'

// https://react-bootstrap.github.io/components/navbar/
function NavBar () {
  return (
    <>
      {[false].map((expand) => (
        <Navbar bg="dark" expand="lg" variant="dark" key={expand} bg="#E8F1CA" expand={expand} className="mb-3"
                style={{ paddingLeft: '10px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '0px' }}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" width="80px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ background: '#FAFFEC' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="legend justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/laufbahnplanung">Laufbahnplanung</Nav.Link>
                  <Nav.Link href="/laufbahnplanung/gluecksrad">Berufs-Glücksrad</Nav.Link>
                  <Nav.Link href="/schritte-der-laufbahnplanung">5 Schritte der Laufbahnplanung</Nav.Link>
                  <Nav.Link href="/haeufige-fragen">Häufige Fragen</Nav.Link>
                  <Nav.Link href="/favoritenliste">Favoritenliste</Nav.Link>
                  <Nav.Link href="/weiterfuehrende-links">Weiterführende Links</Nav.Link>
                  <Nav.Link href="/impressum">Impressum</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar