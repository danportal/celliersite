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

  <Container fluid style={{ padding: 0, margin: 0, width: "100%" }}>
      <Row>
        {/* xs=12 means that this column will take up all 12 available bootstrap columns in the line, xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) */}
        <Col
          xs={12}
          style={{
            height: "700px",
            background:
              "url('Images/ImageAboveNew.jpg') no-repeat center fixed",
            "background-size": "cover",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "6vw",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              FUNCTIONAL ELEGANCE
            </div>

            <div
              style={{
                fontSize: "2rem",
                fontFamily: "Montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              Manufacturer of Premium Concrete Wine Tanks
            </div>

            <div
              style={{
                textAlign: "center",
              }}
            >
              <br></br>
              <Button href="/contact" variant="outline-light" size="xxl" style = {{borderColor : "white", border : "solid", borderRadius : "0"}}>
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <br></br>





<Row style = {{paddingTop : "5rem"}}>
  <Col>
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
      </Col>
</Row>




</Container>
<Container fluid>
<Row
        style={{
          height: "500px",
          background:
            "url('Images/ConcreteBackCrop.jpg') no-repeat center fixed",
          "background-size": "cover",
        }}
      >
        {/* xs=12 means that this column will take up 12 of all 12 available bootstrap columns in the line (full screen), xs is for exstra small size and up. (see here for more info https://react-bootstrap.github.io/layout/grid/) Then when the md size its it makes it 6 of 12 (half the screen) hebnce md={6} */}
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="text-warning"
              style={{
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "left",
              }}
            >
              THE BENEFITS
            </div>
            <div
              style={{
                fontSize: "3rem",
                fontFamily: "montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              <b>WHAT MAKES CONCRETE SO SPECIAL?</b>
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="text-white"
              style={{
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "center",
              }}
            >
              Concrete vessels are completely neutral which allows wines to
              express their unique identity by showcasing their purity and
              terroir.
            </div>
            <a
              href="/benefits"
              class="text-white"
              style={{
                textDecoration: "underline",
                fontSize: "2rem",
                fontFamily: "montserrat",
                textAlign: "center",
                color: "white",
              }}
            >
              <b onClick={{}}>DISCOVER THE BENEFITS</b>
            </a>
          </div>
        </Col>
      </Row>
      </Container>
      <Container>
<Card style={{ backgroundColor: '#EEECE6', borderColor: '#EEECE6'}}>

    <Row xs={1} lg={2}  style={{padding: "2rem" , textAlign: 'center', paddingTop : "6rem"}} >
    <Col>
  <Image  src="Images/ImageBollow.jpg" rounded 
width="70%"
style={{ textAlign: 'center', border : "solid", borderRadius : "0" ,borderWidth : "3px", borderColor : "#EEECE6",  }}
/>
</Col>





<Col style = {{textAlign : "left"}}>

      <Card style={{ fontFamily: 'montserrat', backgroundColor: '#EEECE6', borderColor: '#F1EDE2',}}  class="text-body">

        <Card.Title style={{  fontFamily: 'montserrat', paddingLeft : "0"}}>
      <b>OUR TANKS</b>
        </Card.Title>
          <Card.Body style={{ fontSize: '1.3rem', fontFamily: 'montserrat', paddingLeft : "0"}}>
          We have made it our mission to produce premium wine tanks 
          that stand out from the rest. The result? Wine tanks that are 
          unique in construction, discerning in functionality and 
          unparalleled in beauty
          </Card.Body>
   
      </Card>
<Col style = {{textAlign : "left"}} >
<Button style = {{width : "50%" ,}} href="/winetanks" variant="outline-secondary" style = {{borderColor : "black", border : "solid", borderRadius : "0" ,borderWidth : "1px"}}>FIND OUT MORE</Button>
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
     <Col style = {{textAlign : "center",}}> <Button variant="outline-secondary" style = {{borderColor : "black", border : "solid", borderRadius : "0" ,borderWidth : "1px"}}>ENQUIRE NOW</Button> </Col>
      </Row>
      <br></br>
      </Card.Body>
</Card>
</Container>
    </div>
  );
}

export default Home;
