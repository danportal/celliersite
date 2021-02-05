import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


function Benefits() {
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

    .accordion .card-header:after {
      font-family: 'FontAwesome';  
      content: "\f068";
      float: right; 
  }
  .accordion .card-header.collapsed:after {
      /* symbol for "collapsed" panels */
      content: "\f067"; 
  }

    `}
      </style>

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

      {/* Third part with concrete back 
Note: need text on image */}

      {/* Last part with image left and text right 
Note: Button needs a dark border  style={{ backgroundColor: '#EEECE6'}} */}

<Container fluid style={{padding: "10em",}}>

<Row lg={2} xs={1}>
<Col>

<div className="embed-responsive embed-responsive-16by9">
  <iframe title="embedsPage" className="embed-responsive-item" src="Images/WebVid.mp4"
    allowfullscreen style = {{width : "20em"}}></iframe>
</div>




</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "2em",
}}>

<Card.Body>

<Card.Title>WHY CONCRETE?</Card.Title>
<br></br>
<Card.Subtitle>BENEFITS OF CONCRETE WINEMAKING</Card.Subtitle>
<br></br>

<Card.Text>
The use of cement and clay vessels in their various forms have been used in winemaking for millenia. After losing favour to oak barrels and in modern times stainless steel, winemakers across the world are responding to new trends by increasingly incorporating new age concrete tanks into their cellars. Combining it's own unique properties with the desirable attributes of both wood and stainless steel, concrete hits the sweet spot and the future of winemaking is favouring the reinvented tools of old masters.
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>

<Row>
</Row>

<Row style = {{paddingTop : "3em"}} >
  <Col>
<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>
      AUTONOUS CONTROL
    </Accordion.Toggle >
    <Accordion.Collapse eventKey="0">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1" style = {{ backgroundColor: '#EEECE6',}}>
      NEUTRALITY
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2" style = {{ backgroundColor: '#EEECE6',}}>
      MICRO OXYGENATION
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3" style = {{ backgroundColor: '#EEECE6',}}>
      DURABILITY AND COST EFFECTIVENESS <br></br>
      
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Col>
</Row>

</Container>

    </div>
  );
}

export default Benefits;
