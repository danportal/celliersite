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
import  { useState } from "react";

function Winetanks() {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>

<style type="text/css">
    {`
.alignleft {
	float: left;
    background-color: #EEECE6;
}
.alignright {
	float: right;
    background-color: #EEECE6;
}

.backGround {

    background-color: #EEECE6;

}    `}
</style>



<Container style={{textAlign: 'left', paddingTop : "9rem",backgroundColor: "#EEECE6" }} >
<Row lg={2} xs={1}>
<Col style = {{textAlign : "center"}}>
<Image src="Images/ImageBollow.jpg" thumbnail 
style={{ textAlign: 'center', border : "solid", borderRadius : "0" ,borderWidth : "3px", borderColor : "#EEECE6", padding : "0em" , marginLeft : "0em", marginTop : "0em", }}
width="60%"/>

</Col>

<Col>
<Card style={{
  fontFamily: "montserrat",
  backgroundColor: "#EEECE6",
  borderColor: "#F1EDE2",
  padding: "1rem",
  
}}>

<Card.Body>

<Card.Title style = {{ fontSize : "15px", color : "red"}}>OUR WINE TANKS</Card.Title>

<Card.Subtitle style = {{ paddingBottom : "1rem",fontSize : "25px"}}><b>CONCRETE EGGS</b></Card.Subtitle>
<Card.Text style = {{textAlign : "left"}}>
Inspired by the materials of ancient winemaking vessels and the miracle of nature’s finest design, egg-shaped concrete tanks are fast being an essential tool for all winemakers. Devoid of corners, the ovoid shape creates natural, continuous and temperature stable convection currents keeping lees suspended in a homogenous liquid with the majority of cap being submerged in the narrowed top.This allows winemakers to express their wines’ unique character with less intervention, developing amazing flavour, colour and mouthfeel. </Card.Text>
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
 
  <Accordion.Toggle onClick ={ () => setIsOpen1(!isOpen1)} as={Card.Header} eventKey="0" style = {{ backgroundColor: '#EEECE6' , textAlign : "left", borderBottom : "solid" , borderBottomColor : "black", borderBottomWidth : "3px" }}>
    <p style = {{paddingTop : "1rem"}} className = "alignleft"><b>NATURAL FLOW, LESS INTERVENTION</b></p>  <p style = {{fontSize : "2rem",}} className = "alignright"><div>{ isOpen1 ? 'x' : "+"}</div></p>
    </Accordion.Toggle >
    <Accordion.Collapse eventKey="0">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>The thermodynamic properties of the vertical egg shape create slow but continuous convection currents within the tank. Devoid of corners and owing to the core of the egg retaining more heat, a rising vortex gently creates a controlled stirring of the must or aging wine. Once the wine rises and cools at the top, it sinks down the cooler walls of the concrete, the bulbous bottom offering lees a large surface area to settle. During fermentation, the narrowed top of the egg also keeps most of the cap submerged and in contact with the circular flow of the homogenous liquid (lessening the need for “punch-down” intervention). All these dynamics add depth, volume and enhances colour, while the continuous natural suspension of the lees builds texture and mouthfeel, leading to more complex and complete wines with beautiful colour. 
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <Accordion.Toggle onClick ={ () => setIsOpen2(!isOpen2)} as={Card.Header} eventKey="1" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
      
      <p  style = {{paddingTop : "1rem"}} className = "alignleft"><b>DUAL CAST, COOL CONTROL</b></p>  <p style = {{fontSize : "2rem",}} className = "alignright"><div>{ isOpen2 ? 'x' : "+"}</div></p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>The egg shaped tanks consist of an “inner” egg encased in an outer shell. This uniquely developed process enables the wine to be in contact with pure, chemical free concrete, while the exterior is a seamless reinforced “blank canvas” ready to express a personalised finish.This design also allows a cooling system to be inserted into the wall to slowly draw heat from the within the walls of the egg.The membrane between the two castings enhances the insulating properties of the 120mm thick concrete wall, which also acts a heat sink.

</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <Accordion.Toggle onClick ={ () => setIsOpen3(!isOpen3)} as={Card.Header} eventKey="2" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
      
      <p  style = {{paddingTop : "1rem"}}  className = "alignleft"><b>MORE MOBILITY, EASY MAINTENANCE</b> </p>  <p style = {{fontSize : "2rem",}} className = "alignright"><div>{ isOpen3 ? 'x' : "+"}</div></p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Space constraints for smaller cellars mean that flexibility and movability is key. The tanks can be easily moved with a suitable forklift, while the removable front manway door and top manhole hatch enable easy access during winemaking and cleaning. With the exception of the top manhole neck, all fittings are removable. This makes cleaning easier and should parts be accidently damaged, they are easily replaced.
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <Accordion.Toggle onClick ={ () => setIsOpen4(!isOpen4)} as={Card.Header} eventKey="3" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
     
      <p  style = {{paddingTop : "1rem"}} className = "alignleft"><b> YOUR CELLAR, YOUR LOOK</b> </p>  <p style = {{fontSize : "2rem",}} className = "alignright"><div>{ isOpen4 ? 'x' : "+"}</div></p>
      <br></br>
      
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>The look of your cellar is a big deal - for you and for your visitors. This is your sacred space where you craft your masterpieces and it’s where you need to find inspiration during those tough harvests. Cellier’s egg shaped tanks have an interrupted ovoid form ready to express itself. From off shutter concrete to unique marble like pigmented finishes, it’s only the imagination that limits what possible. </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Col>
</Row>
<Row>
  <Col style = {{textAlign : "center", paddingBottom : "2rem"}}>
<Card style = {{ backgroundColor: '#EEECE6', borderColor : "#EEECE6",}}>
<Card.Title >
SPECIFICATIONS
</Card.Title>
</Card>
</Col>
</Row>
<Row style = {{ padding : "3rem"}}> 
<Table striped bordered hover style={{"borderWidth":"2px",  backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', textAlign : "left" , }}>
  <thead  striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }}>
    <tr striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }} >
      <th striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }}>Weight:</th >
      <th striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }} colSpan="2">2550kg</th>

    </tr>
  </thead >
  <tbody >
    <tr striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid',paddingRight : "2rem" }}>
      <td striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }}>Capacity:</td>
      <td colSpan="2">1600L</td>

    </tr>
    <tr striped bordered hover style={{"borderWidth":"2px",  backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid',paddingRight : "2rem" }}>
      <td striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }}>Dimensions:</td>
      <td colSpan="2">1500 x 1500 x 2500 mm</td>

    </tr>
    <tr striped bordered hover style={{"borderWidth":"2px",  backgroundColor: '#EEECE6' , 'borderColor':"black", 'borderStyle':'solid',paddingRight : "2rem" }}>
      <td striped bordered hover style={{"borderWidth":"2px", backgroundColor: '#EEECE6', 'borderColor':"black", 'borderStyle':'solid', }}>Features:</td>
      <td colSpan="2">400mm OD top manhole w/ bung hole <br></br>
                      380mm Front Oval manway          <br></br>       
                      Thermometer probe                  <br></br> 
                      Sampling tap                       <br></br>     
                      Optional cooling coil          <br></br>   
                      Drainage port w/ butterfly valve    <br></br>   
                      Self leveling adjustable feet      <br></br>
                      Customised exterior finishes </td>
    </tr>
  </tbody>
</Table>
</Row>
</Container>

    </div>
  );
}

export default Winetanks;
