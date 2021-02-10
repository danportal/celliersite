import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div style={{ backgroundColor: "#EEECE6" }}>
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

  <style type="text/css">
    {`
    .centered {
      position: 
      absolute;
      transform: translate(-50%, -50%);
    }
    `}
  </style>

<Container fluid className = "ml-3 ml-lg-0" style = {{backgroundColor: "#EEECE6",}}>
<Row>
<Card>
  <Card.Img src= "Images/ImageAboveNew.jpg" alt="Card image"/>
    <Card.ImgOverlay>
      <Card.Body className= "centered">
        <Card.Title className="text-white" >
        <h1 style={{ fontSize: '5rem', fontFamily: 'Montserrat', textAlign: 'center',}}> FUNCTIONAL ELEGANCE</h1>
        </Card.Title>
          <Card.Subtitle style={{ fontSize: '2rem', fontFamily: 'Montserrat', textAlign: 'center', color: "white"}}>
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
  </Row>





<Row>
      <Card className="card" style={{ backgroundColor: '#EEECE6', borderColor: '#F1EDE2'}}>
        <Card.Body>
          <Card.Text class="text-body">
            <Row  style={{ fontSize: '2rem', fontFamily: 'Montserrat, sans-serif'}} >
            <Col style = {{textAlign : "center"}}> <h3 style={{padding: "1rem",}}>"Winemakers are artisans who deserve exceptional vessels that enable 
              their wines to express their full potential without any distraction"</h3>
              <h4>- William Souter, Co-Founder </h4> </Col> 
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
</Row>



<Row lg={2} xs={1}>
  
<Col style={{ padding : "0rem", fontFamily:'montserrat', textAlign: 'center', }}>

<Card>

  <Card.Img  src= "Images/ConcreteBackCrop.jpg" alt="Card image"/>
  <Card.ImgOverlay>

    <Card.Title className="text-warning" style={{ fontSize: '2rem', fontFamily:'montserrat', }}>
      THE BENEFITS
    </Card.Title>
    <Card.Text style={{ fontSize: '3rem', fontFamily: 'montserrat', color: "white"}} >
      <b>WHAT MAKES <br></br> CONCRETE SO <br></br> SPECIAL?</b>
    </Card.Text>


</Card.ImgOverlay>

</Card>
</Col>
<Col style={{padding : "0rem", fontFamily:'montserrat', textAlign: 'center',  }}>
<Card>
<Card.Img  src= "Images/ConcreteBackCrop.jpg" alt="Card image"/>
  <Card.ImgOverlay>

 <Card.Text style={{fontSize: '2rem', fontFamily:'montserrat', textAlign: 'center', color : "white"}}>
      Concrete vessels are completely neutral which <br></br>
      allows wines to express their unique identity <br></br>
      by showcasing their purity and terroir. <br></br>
</Card.Text>

<Card.Link style={{ textDecoration: "underline", fontSize: '2rem', fontFamily: 'montserrat', textAlign: 'right', color : "white" }} href="/benefits">
      
      <b>DISCOVER THE BENEFITS</b>

    </Card.Link>
 
    </Card.ImgOverlay>
</Card>

  </Col>




</Row>
</Container>

<Container>


<Card style={{ backgroundColor: '#EEECE6', borderColor: '#EEECE6'}}>
    <Row xs={1} lg={2} style={{padding: "2rem" , textAlign: 'center', paddingTop : "6rem" }}  >
    <Col>
  <Image src="Images/ImageBollow.jpg" rounded 
width="70%"
height="80%"/>

</Col>
  




<Col style = {{textAlign : "center"}}>

      <Card style={{ fontFamily: 'montserrat', backgroundColor: '#EEECE6', borderColor: '#F1EDE2',}}  class="text-body">

        <Card.Title style={{  fontFamily: 'montserrat',}}>
      <b>OUR TANKS</b>
        </Card.Title>
          <Card.Body style={{ fontSize: '1.3rem', fontFamily: 'montserrat',textAlign : "center",}}>
          We have made it our mission to produce premium wine tanks 
          that stand out from the rest. The result? Wine tanks that are 
          unique in construction, discerning in functionality and 
          unparallelled in beauty
          </Card.Body>
   
      </Card>
<Col>
<Button style = {{width : "50%" ,}} href="/winetanks" variant="outline-secondary" >FIND OUT MORE</Button>
</Col>
</Col>



      </Row>
</Card>



<Card className="card" style={{ borderColor: '#EEECE6' , backgroundColor: '#EEECE6'}}>
  <br></br>
      <Card.Body style={{ backgroundColor: '#EEECE6'}}>
      <Row>
      <Col  style = {{textAlign : "center", paddingBottom : "3rem"}}> <Card.Title style={{ fontSize: '2.2rem', fontFamily: 'montserrat', textAlign: 'center',}}>
        Customise your tank's finish, <br></br>features, fittings and more!
        </Card.Title> </Col>
        <br></br>
      </Row> 
      <br></br>
      <Row>
     <Col style = {{textAlign : "center",}}> <Button variant="outline-secondary">ENQUIRE NOW</Button> </Col>
      </Row>
      <br></br>
      </Card.Body>
</Card>
</Container>
    </div>
  );
}

export default Home;
