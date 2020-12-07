import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import About from "./pages/about";
import Benefits from "./pages/benefits";
import Contact from "./pages/contact";
import Customers from "./pages/customers";
import Home from "./pages/home";
import Winetanks from "./pages/winetanks";
import Image from "react-bootstrap/Image";
import Table from 'react-bootstrap/Table';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card';
import App from 'App.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

function CustomersPage () {



  return (
<div style={{ backgroundColor: '#EEECE6'}}>

{/* Style block */}


{/*  */}

<Router>
<Navbar fixed="top" style={{ backgroundColor: '#F1EDE2' , textAlign: 'center'}}>
    <Navbar.Brand href="/"><Card.Img src= "Images/CellierLogo.png" alt="Logo"></Card.Img>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/winetanks">WINE TANKS</Nav.Link>
      <Nav.Link href="/benefits">BENEFITS OF CONCRETE</Nav.Link>
      <Nav.Link href="/about">OUR STORY</Nav.Link>
      <Nav.Link href="/customers">CUSTOMERS</Nav.Link>
      <Nav.Link href="/contact">CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
      <Button href="#contact" variant="outline-secondary">Request A Quote</Button>
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
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
</Router>




<Card style={{ backgroundColor: '#EEECE6', borderColor: '#EEECE6'}}>
    <Row style={{padding: "6em"}}>

  <Image src= "Images/ImageBollow.jpg" rounded
      width = "40%"
      height = "40%"
      ></Image> 

      <Col xs={12} md={6}>
      <br></br>
      <Card style={{ fontFamily: 'montserrat', backgroundColor: '#EEECE6', borderColor: '#F1EDE2', padding: "5em"}}  class="text-body">

        <Card.Title style={{ fontSize: '3rem', fontFamily: 'montserrat', textAlign: 'left', position: "absolute",top:"45%",left:"16%"}}>
        <b>TEXT ON RIGHT </b>
        </Card.Title>
          <Card.Body style={{ fontSize: '1.3rem', fontFamily: 'montserrat', textAlign: 'left', position: "absolute",top:"75%",left:"13%"}}>
          image on left text on right 
          hsigjhksfakjhsdfa\kgkjg
          jkaghkgdjkghajkb
          ljdgkjagKJGSAKJ
          </Card.Body>
          </Row>
</Card>
      <br></br>
      <br></br>

      <DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
  <Dropdown.ItemText>This is all the text that drops down </Dropdown.ItemText>
</DropdownButton>
<br></br>
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
  <Dropdown.ItemText>This is all the text that drops down </Dropdown.ItemText>
</DropdownButton>
<br></br>
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
  <Dropdown.ItemText>This is all the text that drops down </Dropdown.ItemText>
</DropdownButton>
<br></br>
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
  <Dropdown.ItemText>This is all the text that drops down </Dropdown.ItemText>
</DropdownButton>

<br></br>

<Table striped bordered hover>
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>weight</td>
      <td>2550kg</td>
    </tr>
    <tr>
      <td>capacity</td>
      <td>Jacob</td>
    </tr>
    <tr>
      <td>dimensions</td>
      <td>Jacob</td>
    </tr>
  </tbody>
</Table>

<br></br>


      <Card>
  <Card.Body style={{ backgroundColor: '#061306'}} >
    <Card.Title class="text-white"><b>CONTACT US</b></Card.Title>
    <br></br>
    <Card.Link class="text-white" href="contactpage">sales@cellierwinetanks.com</Card.Link>
    <br></br>
    <Card.Link style={{}}class="text-white" href="contactpage"> FACEBOOK |</Card.Link>
    <Card.Link class="text-white" href="contactpage"> INSTAGRAM |</Card.Link>
    <Card.Link class="text-white" href="contactpage"> LINKEDIN</Card.Link>
    
<Card.Text class="text-white" >____________________________________________________________________________________________________________________________________________________________</Card.Text>
    <Card.Text class="text-white">
      PRIVACY POLICY | TERMS AND CONDITIONS
    </Card.Text>
  </Card.Body>
</Card>

</div>


  );
}

export default Customers;