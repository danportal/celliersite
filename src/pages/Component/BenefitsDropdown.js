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
import { Accordion, useAccordionToggle } from "react-bootstrap";
import { Component } from "react";
import  { useState } from "react";


  


function BenefitsDropDown (){

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
return(
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

}

    `}
  </style>



<Accordion style = {{textAlign : "left",}}>
 <Card >
<Accordion.Toggle onClick ={ () => setIsOpen1(!isOpen1)} as={Card.Header} eventKey="0" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
  <b> <p  className = "alignleft" style = {{paddingTop : "1rem"}}>AUTONOMOUS CONTROL</p></b>  <p style = {{fontSize : "2rem",}} className = "alignright"><div>{ isOpen1 ? 'x' : "+"}</div></p> 
    </Accordion.Toggle>

  <Accordion.Collapse eventKey="0">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6',  }}>Concrete strikes a perfect balance between fantastic insulation and thermal inertia properties. The incredible insulating properties prevent external temperature differentials influencing the wine inside, while slowly absorbing internal heat changes into the mass of its walls. This  eliminates temperature “spikes” which can stress the yeast and facilitates slower, smoother fermentations requiring less intervention. The inherent temperature stability that concrete provides means it’s fantastic for aging wine too.     
     

      </Card.Body>
    </Accordion.Collapse>
  </Card>
 <Card>
   <Accordion.Toggle onClick ={ () => setIsOpen2(!isOpen2)} as={Card.Header} eventKey="1" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
  <b><p  className = "alignleft" style = {{paddingTop : "1rem"}}>NEUTRALITY</p></b>  <p style = {{fontSize : "2rem"}} className = "alignright"><div>{ isOpen2 ? 'x' : "+"}</div></p>
    </Accordion.Toggle> 
    <Accordion.Collapse eventKey="1">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Once concrete cures it becomes completely neutral, much like Stainless steel. This is beneficial for winemakers who want their wines to express their fruit and terroir without the distraction of oak characteristics. 


      </Card.Body>
    </Accordion.Collapse>
  </Card>
<Card>
   <Accordion.Toggle onClick ={ () => setIsOpen3(!isOpen3)}  as={Card.Header} eventKey="2" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black"}}>
   <b> <p  className = "alignleft" style = {{paddingTop : "1rem"}}>MICRO OXYGENATION</p></b>  <p style = {{fontSize : "2rem"}} className = "alignright"><div>{ isOpen3 ? 'x' : "+"}</div></p>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>When concrete cures, cement particles grow tiny crystals that bond the aggregates together. Incorporated in this porous crystal structure are tiny air voids that slowly diffuse micro amounts of oxygen into the wine without intervention - similar to oak barrels. This allows the wine to gradually evolve, softening tannins and improving mouthfeel, adding to the richness and colour - something stainless doesn’t allow without intervention. When emptied, these microscopic voids refill with air ready to breathe new life into the next wine that fills the tank.  

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card >
   <Accordion.Toggle onClick ={ () => setIsOpen4(!isOpen4)} as={Card.Header} eventKey="3" style = {{ backgroundColor: '#EEECE6', textAlign : "left", borderBottom : "solid" , borderBottomColor : "black", }}>
   <p  className = "alignleft" style = {{paddingTop : "1rem"}}><b>DURABILITY AND COST EFFECTIVENESS</b></p>  <p className = "alignright" style = {{fontSize : "2rem"}}><div >{ isOpen4 ? 'x' : "+"}</div></p>  
      <br></br>
    </Accordion.Toggle> 
  
    <Accordion.Collapse eventKey="3">
      <Card.Body style = {{ backgroundColor: '#EEECE6',  borderColor: '#EEECE6', }}>Concrete stands the test of time. Our tanks are manufactured to be resistant to chemical attack and with an outside casting of over 60 MPa, your concrete tanks can last for several decades if cared for properly. This leads to cost saving in the short term over oak barrels, not to mention concrete is far superior in terms of energy efficiency and labour intensivity - saving you time and money. 

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
)
}

export default BenefitsDropDown;