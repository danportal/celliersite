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

{/* Style block */}


{/*  */}

<Navbar style={{ backgroundColor: '#F1EDE2' , textAlign: 'center'}}>
    <Navbar.Brand href="#home"><Card.Img src= "Images/CellierLogo.png" alt="Logo"></Card.Img>
    </Navbar.Brand>
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
        <Card.Title >
        <Row className="justify-content-md-center">


          <h1>FUNCTIONAL ELEGANCE</h1>

        </Row>  
        </Card.Title>
          <Card.Subtitle>
          <Row className="justify-content-md-center">
              Manufacturer of Premium Concrete Wine Tanks
          </Row>
          </Card.Subtitle>
          <br></br>
          <Row className="justify-content-md-center">
            <Button href="#contact" variant="outline-light">Request A Quote</Button>
          </Row>
      </Card.Body>
  </Card.ImgOverlay>
  </Card>
  <br></br>

{/* Second Div with William's quote 
Note: need to center text */}

      <Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
      <Card.Body>
      <Card.Title class="text-body">
        <Row> 
        <Card.Text  style={{
      fontSize: '2em', fontFamily: 
    'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center'}}>
        "Winemakers are artisans who deserve exceptional vessels that enable 
        their wines to express their full potential without any distraction"
      
        <h3></h3> - William Souter, Co-Founder
        <br></br>

        </Card.Text>
        </Row>
          

          
        </Card.Title>
      <br></br>
      </Card.Body>
</Card>

{/* Third part with concrete back 
Note: need text on image */}

<Row>
<Col className="justify-content-left">
<Card className="text-white">
  <Card.Img src= "Images/ConcreteBackNew.jpg" alt="Card image"/>
  <Card.ImgOverlay>
    <Card.Title className="text-warning" style={{
      fontSize: '1rem', fontFamily: 
    'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center'}}>
      THE BENEFITS</Card.Title>
    <Card.Text style={{
      fontSize: '3rem', fontFamily: 
    'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center'}} >
      WHAT MAKES <br></br> CONCRETE SO <br></br> SPECIAL?
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</Col>
<Col className="justify-content-right">
<Card className="text-white">
  <Card.Img src= "Images/ConcreteBackNew.jpg" alt="Card image"/>
  <Card.ImgOverlay>
    <Card.Title className="text-warning"></Card.Title>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Card.Text style={{
      fontSize: '2rem', fontFamily: 
    'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center'}}>
      
      Concrete vessels are completely neutral which <br></br>
      allow wines to express their unique identity <br></br>
      by showcasing their purity and terror <br></br>
    </Card.Text>

    <Card.Link style={{
      fontSize: '2rem', fontFamily: 
    'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center'}} 
    href="Benefits" class="text-white">
      
      DISCOVER THE BENEFITS

    </Card.Link>
  </Card.ImgOverlay>
</Card>
</Col>
</Row>

{/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}


<Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
    <Row style={{padding: "5em"}}>
      <br></br>
      <Image src= "Images/ImageBollow.jpg" rounded
      width = "50%"
      height = "50%"
      ></Image>

      <Col>
      <br></br>
      <Card style={{ fontFamily: 'montserrat', backgroundColor: '#EEECE6', borderColor: '#F1EDE2', padding: "5em"}}  class="text-body">
        <Row>
        <Card.Title>
        <h2>OUR TANKS</h2>
        </Card.Title>
          <Card.Body>
          We have made it our mission to produce premium wine tanks 
          that stand out from the rest. The result? Wine tanks that are 
          unique in construction, discerning in functionality and 
          unparallelled in beauty
          </Card.Body>
          </Row>
      </Card>
      <Row className="justify-content-left" style={{padding: "5em"}}>
      <Button variant="outline-secondary">FIND OUT MORE</Button> 
      </Row>
      </Col>
      </Row>
</Card>



<Card className="card" style={{ borderColor: '#F1EDE2'}}>
      <Card.Body style={{ backgroundColor: '#EEECE6'}}>
      <Row className="justify-content-md-center">
      <Card.Title class="text-body">Customise your tank's finish, features, fittings and more!</Card.Title>
      </Row> 
      <br></br>
      <Row className="justify-content-md-center">
      <Button variant="outline-secondary">ENQUIRE NOW</Button> 
      </Row>
      <br></br>
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