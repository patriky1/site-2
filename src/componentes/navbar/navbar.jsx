import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

import {Row} from "react-bootstrap"

export default function Home() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBCollapse show={showNavExternal}>
        <div className="bg-dark p-4">
          <Row>
          <h1 className="text-white">Patriky-B</h1>
          </Row>
          <Row>
          <a className="text-white" href="#">portifólio</a>
          </Row>
          <Row>
          <a className="text-white" href="#">WhatsApp</a>
          </Row>
          <Row>
          <a className="text-white" href="#">Email</a>
          </Row>

        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
