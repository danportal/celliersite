import "bootstrap/dist/css/bootstrap.min.css";
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
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'

function App() {



  return (
<div style={{ backgroundColor: '#EEECE6'}}>


<Navbar style={{ backgroundColor: '#F1EDE2'}}>
    <Navbar.Brand href="#home">LOGO HERE</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#winetanks">WINE TANKS</Nav.Link>
      <Nav.Link href="#benefits">BENEFITS OF CONCRETE</Nav.Link>
      <Nav.Link href="#about">OUR STORY</Nav.Link>
      <Nav.Link href="#contact">CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
      <Button href="#contact" variant="outline-secondary">Request A Quote</Button>
    </Form>
  </Navbar>

 

{/* First Image 
Note: Needs text on image  */}
  

<Card className="text-white">
  <Card.Img src= "Images/ImageAboveNew.jpg" alt="Card image"/>
    <Card.ImgOverlay>
      <Card.Body>
        <Card.Title style={{fontFamily: 'sans-serif'}}>
          FUNCTIONAL ELEGANCE
        </Card.Title>
          <Card.Subtitle>
              Manufacturer of Premium Concrete Wine Tanks
          </Card.Subtitle>
          <br></br>
            <Button href="#contact" variant="outline-light">Request A Quote</Button>
      </Card.Body>
  </Card.ImgOverlay>
  </Card>
  <br></br>

{/* Second Div with William's quote 
Note: need to center text */}

      <Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
      <Card.Body>
      <Card.Title class="text-body">"Winemakers are artisans who deserve exceptional vessels that enable
          their wines to express their full potential without any distraction"
          <Card.Subtitle class="text-body">
          - William Souter, Co-Founder
          </Card.Subtitle>
        </Card.Title>
      <br></br>
      </Card.Body>
</Card>

{/* Third part with concrete back 
Note: need text on image */}


<Card className="text-white" style={{ width: '90rem', height: "30rem"}}>
  <Card.Img src= "Images/ConcreteBackNew.jpg" alt="Card image"/>
  <Card.ImgOverlay>
    <Card.Title className="text-warning">THE BENEFITS</Card.Title>
    <Card.Text>
      <b>WHAT MAKES CONCRETE SO SPECIAL?</b>
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>


{/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}

<div> 
<Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
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


<Card className="card" style={{ borderColor: '#F1EDE2'}}>
      <Card.Body className="justify-content-xl-center" style={{ backgroundColor: '#EEECE6'}}>
      <Card.Title class="text-body">Customise your tank's finish, features, fittings and more!</Card.Title>
      <br></br>
      <Button variant="outline-secondary">Enquire Now</Button> 
      </Card.Body>
</Card>


<Card>
  <Card.Body style={{ backgroundColor: '#061306'}} >
    <Card.Title class="text-white"><b>CONTACT US</b></Card.Title>
    <br></br>
    <Card.Link class="text-white" href="contactpage">sales@cellierwinetanks.com</Card.Link>
    <br></br>
    <Card.Link class="text-white" href="contactpage"> FACEBOOK |</Card.Link>
    <Card.Link class="text-white" href="contactpage"> INSTAGRAM |</Card.Link>
    <Card.Link class="text-white" href="contactpage"> LINKEDIN</Card.Link>
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