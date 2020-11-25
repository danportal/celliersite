import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
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
import Form from 'react-bootstrap/Form';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'

function App() {



  return (
    <div 
      style={{
        backgroundColor: '#F1EDE2', 


      }}
      >

    <div className="App"> 
  <Navbar>
  <Navbar.Brand href="#home">logo needs to go here </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <a href="#login">request button goes here</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</div>

{/* First Image 
Note: Needs text on image  */}
<div>
<Container fluid >
      <Image src= "Images/ImageAboveNewText.jpg" rounded
      width= "100%"
      ></Image>
</Container>
</div>

{/* Second Div with William's quote 
Note: need to center text */}

     <Container>
     <Row>
    <p>
    <Col></Col>
    </p>
    <br></br>
    <p>
    <Col></Col>
    </p>
    <br></br>
    </Row>
        <Row className="justify-content-center, .font"> 
          <p>
         "Winemakers are artisans who deserve exceptional vessels that enable
          their wines to express their full potential without any distraction"
          </p>
        </Row>

      <Row className="justify-content-center">
        <p>
        William Souter, CO-Founder
        </p>
      </Row>
      </Container>

{/* Third part with concrete back 
Note: need text on image */}

<div>
  <Container fluid >
      <Image src= "Images/ConcreteBackNew.jpg" rounded
      width= "100%"
      ></Image>
      <div class=""></div>
  </Container>
</div>

<Jumbotron fluid style={{backgroundColor: '#F1EDE2'}}>
  <Container>
    <h1 className="justify-content-center">Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>


{/* Last part with image left and text right 
Note: Button needs a dark border */}

<div>
<Card style={{ backgroundColor: '#F1EDE2'}}>
    <Row>
      <Col>
      <br></br>
      <Image src= "Images/ImageBollow.jpg" rounded
      width = "50%"
      ></Image>
      <div class=""></div>
      </Col>
      <Col>

      <div>
        <p></p>
      Our Tanks 
      </div >

      <br></br>

      <div>
      We have made it our mission to produce premium wine tanks 
      that stand out from the rest. The result? Wine tanks that are 
      unique in construction, discerning in functionality and 
      unparallelled in beauty
  
      </div>
      <br></br>


      <Button variant="outline-secondary">Find Out More</Button> 
     
      </Col>
      </Row>
</Card>
</div>


<Card>
      <Card.Body className="justify-content-xl-center" style={{ backgroundColor: '#F1EDE2'}}>
      <Card.Title class="text-body">Customise your tank's finish, features, fittings and more!</Card.Title>
      <br></br>
      <Button variant="outline-secondary">Enquire Now</Button> 
      </Card.Body>
</Card>


<Card>
  <Card.Body style={{ backgroundColor: '#061306'}} >
    <Card.Title class="text-white">CONTACT US</Card.Title>
    <br></br>
    <Card.Text class="text-white">
      sales@cellierwinetanks.com
    <br></br>
      FACEBOOK | INSTAGRAM | LINKEDIN
    </Card.Text>
    <Card.Text class="text-white">
      __________________________________________________________________________________________________
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