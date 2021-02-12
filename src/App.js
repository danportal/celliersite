import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import About from "./pages/about";
import Benefits from "./pages/benefits";
import ContactUs from "./pages/contact";
import Customers from "./pages/customers";
import Home from "./pages/home";
import Winetanks from "./pages/winetanks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // ***** MAIN ISSUES ****
  // we are still coding the other pages, we simply cant progress without fixing reponsiveness and navbar routing
  // our biggest and main issue is that the navbar is not working or compiling
  // our second biggest issue is responsiveness, nothing seems to work right
  // when compiling this is the error we get: " ./src/pages/Contact.js
  // Module not found: Can't resolve './pages/Benefits' in '/Users/mac/Client_sites/cellier/cellier-wine-tanks/src/pages' ""

  return (
    <Container fluid style={{ backgroundColor: "#EEECE6", padding: 0, margin: 0, position: 'fixed', height:'100%', overflowY: 'scroll' }}>
      <Row>
        <Col xs={12}>
          <Navbar
            fluid
            collapseOnSelect
            expand="lg"
            fixed="top"
            style={{
              backgroundColor: "#F1EDE2",
              textAlign: "center",
              padding: 0,
            }}
            onToggle={function (e) {}}
          >
            <Navbar.Brand href="/">
              <Card.Img src="Images/CellierLogo.png" alt="Logo"></Card.Img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/winetanks">WINE TANKS</Nav.Link>
                <Nav.Link href="/benefits">BENEFITS OF CONCRETE</Nav.Link>
                <Nav.Link href="/about">OUR STORY</Nav.Link>
                <Nav.Link href="/customers">CUSTOMERS</Nav.Link>
                <Nav.Link href="/contact">CONTACT US</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/contact">
                  <Button href="#contact" variant="outline-secondary">
                    Request A Quote
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Router>
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
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card style={{ padding: 0 }}>
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
               <hl></hl>
              </Card.Text>
              <Card.Text class="text-white">
                PRIVACY POLICY | TERMS AND CONDITIONS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
