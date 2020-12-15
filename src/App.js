import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import About from "./pages/about";
import Benefits from "./pages/benefits";
import ContactUs from "./pages/contact";
import Customers from "./pages/customers";
import Home from "./pages/home";
import Winetanks from "./pages/winetanks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // ***** MAIN ISSUES ****
  // we are still coding the other pages, we simply cant progress without fixing reponsiveness and navbar routing
  // our biggest and main issue is that the navbar is not working or compiling
  // our second biggest issue is responsiveness, nothing seems to work right
  // when compiling this is the error we get: " ./src/pages/Contact.js
  // Module not found: Can't resolve './pages/Benefits' in '/Users/mac/Client_sites/cellier/cellier-wine-tanks/src/pages' ""

  function requestAQuoteClicked(e) {
    window.location = "mailto:sales@cellierwinetanks.com"
  }

  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
      {/* this is how we understand to put the navbard together - 
we also cant get it responsive with the mobile "burger"  dropdown menu  */}

      <Router>
        <Navbar
          fixed="top"
          style={{ backgroundColor: "#F1EDE2", textAlign: "center" }}
        >
          <Navbar.Brand href="/">
            <Card.Img src="Images/CellierLogo.png" alt="Logo"></Card.Img>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/winetanks">WINE TANKS</Nav.Link>
            <Nav.Link href="/benefits">BENEFITS OF CONCRETE</Nav.Link>
            <Nav.Link href="/about">OUR STORY</Nav.Link>
            <Nav.Link href="/customers">CUSTOMERS</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
          <Form inline>
            <Button
              href="#contact"
              variant="outline-secondary"
              onClick={requestAQuoteClicked}
            >
              Request A Quote
            </Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path="/winetanks">
            <Winetanks />
          </Route>
          <Route path="/benefits">
            <Benefits />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* this is the first main card image overlay with text - we cannot keep text centered when resizing screen */}

      <Card>
        <Card.Body style={{ backgroundColor: "#061306" }}>
          <Card.Title class="text-white">
            <b>CONTACT US</b>
          </Card.Title>
          <br></br>
          <Card.Link class="text-white" href="contactpage">
            sales@cellierwinetanks.com
          </Card.Link>
          <br></br>
          <Card.Link style={{}} class="text-white" href="contactpage">
            {" "}
            FACEBOOK |
          </Card.Link>
          <Card.Link class="text-white" href="contactpage">
            {" "}
            INSTAGRAM |
          </Card.Link>
          <Card.Link class="text-white" href="contactpage">
            {" "}
            LINKEDIN
          </Card.Link>

          <Card.Text class="text-white">
            ____________________________________________________________________________________________________________________________________________________________
          </Card.Text>
          <Card.Text class="text-white">
            PRIVACY POLICY | TERMS AND CONDITIONS
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
