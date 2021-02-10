import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion'

function Winetanks() {
  return (
    <div>

<Container fluid style={{textAlign: 'center', paddingTop : "9rem",}} className = "ml-3 ml-lg-0">
<Row lg={2} xs={1}>
<Col>
<Image src="Images/ImageBollow.jpg" thumbnail 
style = {{padding : "0em" , marginLeft : "0em", marginTop : "0em"}}
width="60%"
height="0%"/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "1rem",
  
}}>

<Card.Body>

<Card.Title style = {{ fontSize : "1rem", color : "red"}}>OUR WINE TANKS</Card.Title>

<Card.Subtitle style = {{ paddingBottom : "1rem",fontSize : "2rem"}}>CONCRETE EGGS</Card.Subtitle>
<Card.Text>
Inspired by the materials of ancient winemaking vessels and the miracle of nature's finest design, egg-shaped concrete tanks are fast being an essential tool for all winemakers. Devoid of corners the ovoid shape creates natural, continuous and temperature stable convection currents keeping lees suspended in a homogenous liquid with the majority of cap being submerged in the narrowed top. This allows winemakers to express their wines' unique character with less intervention, developing amazing flavour, colour and mouthfeel. 
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>

<Row >
<Col>
<Card style = {{textAlign : "center",backgroundColor: "#EEECE6", borderColor : "#EEECE6", paddingTop : "3em" }}>
<Card.Title style = {{textAlign : "center",backgroundColor: "#EEECE6", }}><h2>BENEFITS OF EGG SHAPE</h2></Card.Title>
</Card>
</Col>
</Row>

<Row style = {{padding : "3em"}} >
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

<Table striped bordered hover style={{"borderWidth":"3px", 'borderColor':"black", 'borderStyle':'solid', }}>
  <thead>
    <tr>
      <th>Weight:</th>
      <th colSpan="2">2550kg</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Capacity:</td>
      <td colSpan="2">Mark</td>

    </tr>
    <tr>
      <td>Dimensions:</td>
      <td colSpan="2">Jacob</td>

    </tr>
    <tr>
      <td>Features:</td>
      <td colSpan="2">400 mm OD top manhole w/ bung hole <br></br>
                      380 mm Front Oval manway           <br></br>       
                      Thermometer probe                  <br></br> 
                      Sampling tap                       <br></br>     
                      Optional cooling cooling           <br></br>   
                      Racking port w/ butterfly valve    <br></br>   
                      Drainage port w/ butterfly valve       </td>
    </tr>
  </tbody>
</Table>

</Container>

    </div>
  );
}

export default Winetanks;
