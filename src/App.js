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
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
function App() {
  

  function requestAQuoteClicked(e) {
    window.location = "mailto:sales@cellierwinetanks.com"
  }

  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
      {/* this is how we understand to put the navbard together - 
we also cant get it responsive with the mobile "burger"  dropdown menu  */}


<Container fluid style = {{backgroundColor : "#103326"}}>
      <Router>



          <Navbar collapseOnSelect expand="lg"  fixed="top" 
          style={{ backgroundColor: "#103326", textAlign: "center",  }}>
          <Navbar.Brand href="/">
            <Card.Img src="Images/CellierLogo.png" alt="Logo"></Card.Img>
          </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style = {{borderColor : "white" , backgroundColor : "white"}}/>
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav>
    <Nav.Link href="/winetanks" style = {{color : "white"}}>WINE TANKS</Nav.Link>
            <Nav.Link href="/benefits" style = {{color : "white"}}>BENEFITS OF CONCRETE</Nav.Link>
            <Nav.Link href="/about" style = {{color : "white"}}>OUR STORY</Nav.Link>
            <Nav.Link href="/customers" style = {{color : "white"}}>CUSTOMERS</Nav.Link>
            <Nav.Link href="/contact" style = {{color : "white"}}>CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
            <Button
              href="#contact"
              variant="outline-secondary"
              onClick={requestAQuoteClicked}
              style = {{color : "white"}}
            >
              Request A Quote
            </Button>
          </Form>
  </Navbar.Collapse>
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
      </Container>
      <Container fluid style = {{backgroundColor : "#103326"}}>

  <Row xs={1} lg={3}>

 <Col>
 <br></br>
<Card style={{ textAlign : "center", backgroundColor : "#103326", color : "white" , borderColor: '#103326',}} >
<Card.Text style = {{fontSize : "1.2rem"}}>CONTACT</Card.Text>



<Card.Text>+27 78 627 7978</Card.Text>
<Card.Link href="#">sales@cellierwinetanks.com </Card.Link>

</Card >
</Col >

<Col>
<br></br>
<Card style={{ textAlign : "center", backgroundColor : "#103326", color : "white", borderColor: '#103326',}}>

<Image src="Images/FooterLogo.png" rounded style = {{  marginLeft: "auto", marginRight: "auto", width : "4em" , height : "4em"}} />
<br></br>
<Card.Text>COPYRIGHT 2020 CELLIER WINE TANKS</Card.Text>
<Card.Text>PRIVACY POLICY</Card.Text>

</Card>
</Col>

<Col>
<br></br>
<Card style={{ textAlign : "center", backgroundColor : "#103326", color : "white" , borderColor: '#103326',}}>
<Card.Text>CONNECT</Card.Text>
<br></br>

<Row style={{ textAlign : "center",}}>
  <Col>
<a href="https://www.facebook.com/cellierwinetanks/">
  <Image src="Images/FaceBookLogo.png" className="githubIcon" rounded style = {{  marginLeft: "auto", marginRight: "auto", width : "2em" , height : "2em"}} />
</a>

<a href="https://www.instagram.com/cellierwinetanks/?hl=en">
  <Image src="Images/InstaLogo.jpg" className="githubIcon" rounded style = {{  marginLeft: "auto", marginRight: "auto", width : "2em" , height : "2em"}} />
</a>

<a href="#">
  <Image src="Images/LinkInLogo.png" className="githubIcon" rounded  style = {{  marginLeft: "auto", marginRight: "auto", width : "2em" , height : "2em"}} />
</a>
</Col>
</Row>

</Card>
</Col>


</Row>
</Container>



    </div>
  );
}

export default App;