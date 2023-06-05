import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ContactUs from './ContactUs';
import WhereAreWe from './WhereAreWe'

function MyFooter() {

  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <h6><b>Indirizzo</b></h6>
            <Nav.Link>
              <WhereAreWe />
            </Nav.Link>
            <h6><b>Email</b></h6>
            <p><i>info@libridaorbi.it</i></p>
            <h6><b>Numero</b></h6> 
            <p><i>+39 3273871091</i></p>
          </Col>

          <Col>
            <h6><b>Consigli</b></h6>
            <Nav.Link href="#consigli-link"><i>Eccoti dei consigli per migliorare la tua esperienza di lettura</i></Nav.Link>
            <br></br>
            <h6><b>Errori</b></h6>
            <Nav.Link onClick={() => setShowContactUs(true)}><i>Segnala eventuali errori o problemi</i></Nav.Link>
            <ContactUs show={showContactUs} onHide={() => setShowContactUs(false)} />
          </Col>
          <Col>
            <h6><b>Contattaci</b></h6>
            <Nav.Link onClick={() => setShowContactUs(true)}><i>Compila il form di contatto per chiederci informazioni o per collaborare con noi</i></Nav.Link>
            <ContactUs show={showContactUs} onHide={() => setShowContactUs(false)} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;


