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

<Navbar fixed="top" style={{ backgroundColor: '#F1EDE2' , textAlign: 'center'}}>
    <Navbar.Brand href="/"><Card.Img src= "Images/CellierLogo.png" alt="Logo"></Card.Img>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/winetanks">WINE TANKS</Nav.Link>
      <Nav.Link href="/benefits">BENEFITS OF CONCRETE</Nav.Link>
      <Nav.Link href="/about">OUR STORY</Nav.Link>
      <Nav.Link href="/contact">CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
      <Button href="#contact" variant="outline-secondary">Request A Quote</Button>
    </Form>
  </Navbar>

{/* First Image 
Note: Needs text on image  */}

<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>


<Card>
  <Card.Img src= "Images/ImageAboveNew.jpg" alt="Card image"/>
    <Card.ImgOverlay style={{ position: "absolute",top:"35%",Left:"50%"}} >
      <Card.Body>
        <Card.Title className="text-white" >
        <h1 style={{ fontSize: '5rem', fontFamily: 'Montserrat', textAlign: 'center'}}> FUNCTIONAL ELEGANCE</h1>
        </Card.Title>
          <Card.Subtitle style={{ fontSize: '2em', fontFamily: 'Montserrat', textAlign: 'center', color: "white"}}>
          <Row className="justify-content-center" >
              Manufacturer of Premium Concrete Wine Tanks
          </Row>
          </Card.Subtitle>
          <br></br>
          <Row className="justify-content-center">
            <Button href="/contact" variant="outline-light" size="xxl">REQUEST A QUOTE</Button>
          </Row>
      </Card.Body>
  </Card.ImgOverlay>
  </Card>
  <br></br>


{/* Second Div with William's quote 
Note: need to center text */}

<style type="text/css">
    {`
    .centered {
      position: 
      absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    `}
  </style>

      <Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
        <Card.Body>
          <Card.Text class="text-body">
            <Row  style={{ fontSize: '2em', fontFamily: 'Montserrat, sans-serif'}} >
              <h3 style={{padding: "1rem", textAlign: 'center'}}>"Winemakers are artisans who deserve exceptional vessels that enable 
              their wines to express their full potential without any distraction"</h3>
              <h4 style={{position: "absolute",top:"80%",right: "39%"}}>- William Souter, Co-Founder </h4>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>

{/* Third part with concrete back 
Note: need text on image */}



<Card>

  <Card.Img  src= "Images/ConcreteBackCrop.jpg" alt="Card image"/>
  <Card.ImgOverlay>


    <Card.Title className="text-warning" style={{ fontSize: '2rem', fontFamily:'montserrat', textAlign: "left", position: "absolute",top:"15%",left:"5%"}}>
      THE BENEFITS
    </Card.Title>
    <Card.Text style={{ fontSize: '3rem', fontFamily: 'montserrat', textAlign: 'left', position: "absolute",top:"25%",left:"5%", color: "white"}} >
      <b>WHAT MAKES <br></br> CONCRETE SO <br></br> SPECIAL?</b>
    </Card.Text>


    <Card.Link class="text-white" style={{ textDecoration: "underline", fontSize: '2rem', fontFamily: 'montserrat', textAlign: 'left', position: "absolute",top:"57%", right:"27.5%"}} href="/benefits">
      
      <b>DISCOVER THE BENEFITS</b>

    </Card.Link>
 
 <Card.Text className="text-white" style={{fontSize: '2rem', fontFamily:'montserrat', textAlign: 'left', position: "absolute",top:"26%", right:"5%"}}>
      Concrete vessels are completely neutral which <br></br>
      allows wines to express their unique identity <br></br>
      by showcasing their purity and terroir. <br></br>
</Card.Text>
</Card.ImgOverlay>
</Card>




{/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}


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
        <b>OUR TANKS</b>
        </Card.Title>
          <Card.Body style={{ fontSize: '1.3rem', fontFamily: 'montserrat', textAlign: 'left', position: "absolute",top:"75%",left:"13%"}}>
          We have made it our mission to produce premium wine tanks 
          that stand out from the rest. The result? Wine tanks that are 
          unique in construction, discerning in functionality and 
          unparallelled in beauty
          </Card.Body>
      </Card>
      <br></br>
      <br></br>
      <Row style={{padding: "8em", position: "absolute",left:"0%"}}>
      <Button variant="outline-secondary" size="xl">FIND OUT MORE</Button> 
      </Row>
      </Col>
      </Row>
</Card>



<Card className="card" style={{ borderColor: '#EEECE6' , backgroundColor: '#EEECE6'}}>
  <br></br>
      <Card.Body style={{ backgroundColor: '#EEECE6'}}>
      <Row className="justify-content-center">
      <Card.Title class="text-body" style={{ fontSize: '2.2rem', fontFamily: 'montserrat', textAlign: 'center', position: "absolute",top:"-20%",left:"32%"}}>
        Customise your tank's finish, <br></br>features, fittings and more!
        </Card.Title>
        <br></br>
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

export default App;