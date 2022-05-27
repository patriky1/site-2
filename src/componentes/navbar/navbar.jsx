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
          <a className="text-white" href="#">Collapsed content</a>
          </Row>
          <span className="text-white">Toggleable via the navbar brand.</span>
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
