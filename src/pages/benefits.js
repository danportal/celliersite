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
import benefitsDropdown from "./Component/BenefitsDropdown";
import { Component } from "react";
import BenefitsDropDown from "./Component/BenefitsDropdown";

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

<Container style={{backgroundColor: "#EEECE6", textAlign : "left"}} >

<Row lg={2} xs={1}  style = {{paddingTop : "10rem", textAlign : "left"}} >
<Col>

<div className="embed-responsive embed-responsive-16by9" style = {{height : "100%"}}>
  <iframe title="embedsPage" className="embed-responsive-item" src="Images/WebVid.mp4"
     style = {{width : "45%", height : "99%",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     }}></iframe>
</div>




</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "1rem",
}}>

<Card.Body>

<Card.Title style = {{fontSize : "15px",color : "red",textAlign : "left"}}>WHY CONCRETE?</Card.Title>

<Card.Subtitle style = {{ textAlign : "left"}}><h3><b>BENEFITS OF CONCRETE WINEMAKING</b></h3></Card.Subtitle>
<br></br>

<Card.Text>
The use of cement and clay vessels in their various forms have been used in winemaking for millennia. After losing favour to oak barrels and in modern times stainless steel, winemakers across the world are responding to new trends by increasingly incorporating new age concrete tanks into their cellars. Combining it’s own unique properties with the desirable attributes of both wood and stainless steel, concerte hits the sweet spot and the future of winemaking is favouring the reinvented tools of the old masters. 
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>

<Row>
</Row>

<Row style = {{paddingTop : "3rem", paddingBottom : "3rem", }} >
  <Col>
<BenefitsDropDown></BenefitsDropDown>
</Col>
</Row>

</Container>

    </div>
  );
}

export default Benefits;
