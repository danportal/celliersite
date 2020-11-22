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
import Form from 'react-bootstrap/Form'

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
<Container>
      <Image src= "Images/ImageAbove.jpg" rounded
      width= "100%"
      ></Image>
      </Container>
</div>

{/* Second Div with William's quote 
Note: need to center text */}

      <div> 

      <Row>
      "Winemakers are artisans who deserve exceptional vessels that enable
          their wines to express their full potential without any distraction"
      </Row>

      <Row>
        William Souter, CO-Founder
      </Row>
      </div>

{/* Third part with concrete back 
Note: need text on image */}

      <div>
<Container>
      <Image src= "Images/ConcreteBack.jpg" rounded
      width= "100%"
      ></Image>
      <div class="">Centered</div>
</Container>
</div>


{/* Last part with image left and text right 
Note: Button needs a dark border */}

<div>
<Container>
    <Row>
      <Col>
      <Image src= "Images/ImageBollow.jpg" rounded
      width = "50%"
      ></Image>
      <div class="">Centered</div>
      </Col>
      <Col>

      <div>
      Our Tanks 
      </div >

      <br></br>

      <div>
      We have made it our mission to produce premium wine tanks 
      that stand out from the rest. The result? Wine tanks that are 
      unique in construction, discerning in functionality and 
      unparallelled in beauty
      </div>

      <Button variant="light" >Find Out More</Button> 
     
      </Col>
      </Row>
</Container>
</div>
 
</div>


  );
}

export default App;