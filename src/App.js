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

      <style type="text/css">
        {`
    .centered {
      position: 
      absolute;
      top: 50%;
      
      transform: translate(-50%, -50%);
      
    }
    `}
      </style>

<Container fluid  style = {{        backgroundColor: "#EEECE6",
        padding: 0,
        margin: 0,
        position: "fixed",
        height: "100%",
        overflowY: "scroll",}}>

<Row xs={12} >
<Col> 
          <Navbar collapseOnSelect expand="lg"  fixed="top" 
          style={{ backgroundColor: "#103326",  }}>
          <Navbar.Brand href="/">
            <Card.Img src="Images/CellierLogo.png" alt="Logo"></Card.Img>
          </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" style = {{borderColor : "white" , backgroundColor : "white" , textAlign : "right"}}/>
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="ml-auto">
    <Nav.Link href="/winetanks" style = {{color : "white",}}>WINE TANKS</Nav.Link>
            <Nav.Link href="/benefits" style = {{color : "white"}}>BENEFITS OF CONCRETE</Nav.Link>
            <Nav.Link href="/about" style = {{color : "white"}}>OUR STORY</Nav.Link>
            <Nav.Link href="/customers" style = {{color : "white"}}>CUSTOMERS</Nav.Link>
            <Nav.Link href="/contact" style = {{color : "white"}}>CONTACT US</Nav.Link>
    </Nav>
    <Form inline > 
            <Button 
              href="#contact"
              variant="outline-secondary"
              onClick={requestAQuoteClicked}
              style = {{color : "white", borderColor : "white", border : "solid", borderRadius : "0" ,borderWidth : "1px",}}
            >
              Request A Quote
            </Button>
          </Form>
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

  <Row xs={1} lg={3} style = {{background : "#103326"}}>

  <Col xs= {12}>
 <br></br>
<Card style={{ textAlign : "center", backgroundColor : "#103326", color : "white" , borderColor: '#103326',}} >
<Card.Text style = {{fontSize : "1.2rem" , textAlign : "center"}} >CONTACT</Card.Text>



<Card.Text   style = {{textAlign : "center"}}  >+27 78 627 7978</Card.Text>
<Card.Link href="#"  style = {{ textAlign : "center"}} >sales@cellierwinetanks.com </Card.Link>

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

<Row style={{ textAlign : "center", paddingBottom : "3rem"}}>
  <Col>
<a href="https://www.facebook.com/cellierwinetanks/" target="_blank">
  <Image src="Images/FaceBookLogo.png" className="githubIcon" rounded style = {{  marginLeft: "auto", marginRight: "auto", width : "2em" , height : "2em"}} />
</a>

<a href="https://www.instagram.com/cellierwinetanks/?hl=en" target="_blank">
  <Image src="Images/InstaLogo.jpg" className="githubIcon" rounded style = {{  marginLeft: "auto", marginRight: "auto", width : "2em" , height : "2em"}} />
</a>

<a href="https://www.linkedin.com/company/cellierwinetanks/" target="_blank">
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